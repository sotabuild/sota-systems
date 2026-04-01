import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Hotels table - represents hotel businesses using SOTA
export const hotels = mysqlTable("hotels", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  country: varchar("country", { length: 100 }),
  totalRooms: int("totalRooms").default(0),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  logo: text("logo"),
  coverImage: text("coverImage"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Hotel = typeof hotels.$inferSelect;
export type InsertHotel = typeof hotels.$inferInsert;

// Modules - SOTA's product offerings
export const modules = mysqlTable("modules", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  icon: varchar("icon", { length: 100 }),
  category: mysqlEnum("category", ["booking", "admin", "experience", "integration"]).notNull(),
  stripeProductId: varchar("stripeProductId", { length: 255 }).notNull(),
  basePriceUsd: int("basePriceUsd").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Module = typeof modules.$inferSelect;
export type InsertModule = typeof modules.$inferInsert;

// Pricing Plans - different tiers for each module
export const pricingPlans = mysqlTable("pricingPlans", {
  id: int("id").autoincrement().primaryKey(),
  moduleId: int("moduleId").notNull().references(() => modules.id),
  name: varchar("name", { length: 100 }).notNull(),
  tier: mysqlEnum("tier", ["basic", "premium", "enterprise"]).notNull(),
  priceUsd: int("priceUsd").notNull(),
  billingCycle: mysqlEnum("billingCycle", ["monthly", "annual"]).notNull(),
  stripePriceId: varchar("stripePriceId", { length: 255 }).notNull(),
  features: text("features"),
  maxRooms: int("maxRooms"),
  maxUsers: int("maxUsers"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PricingPlan = typeof pricingPlans.$inferSelect;
export type InsertPricingPlan = typeof pricingPlans.$inferInsert;

// Hotel Subscriptions - tracks which modules each hotel has
export const hotelSubscriptions = mysqlTable("hotelSubscriptions", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  moduleId: int("moduleId").notNull().references(() => modules.id),
  planId: int("planId").notNull().references(() => pricingPlans.id),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  status: mysqlEnum("status", ["active", "paused", "canceled", "expired"]).default("active").notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate"),
  renewalDate: timestamp("renewalDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type HotelSubscription = typeof hotelSubscriptions.$inferSelect;
export type InsertHotelSubscription = typeof hotelSubscriptions.$inferInsert;

// Rooms - hotel rooms inventory
export const rooms = mysqlTable("rooms", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  number: varchar("number", { length: 50 }).notNull(),
  type: mysqlEnum("type", ["single", "double", "suite", "deluxe", "penthouse"]).notNull(),
  capacity: int("capacity").notNull(),
  pricePerNight: int("pricePerNight").notNull(),
  description: text("description"),
  amenities: text("amenities"),
  images: text("images"),
  virtualTourUrl: text("virtualTourUrl"),
  isAvailable: int("isAvailable").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Room = typeof rooms.$inferSelect;
export type InsertRoom = typeof rooms.$inferInsert;

// Bookings - guest reservations
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  roomId: int("roomId").notNull().references(() => rooms.id),
  guestName: varchar("guestName", { length: 255 }).notNull(),
  guestEmail: varchar("guestEmail", { length: 320 }).notNull(),
  guestPhone: varchar("guestPhone", { length: 20 }),
  checkInDate: timestamp("checkInDate").notNull(),
  checkOutDate: timestamp("checkOutDate").notNull(),
  numberOfGuests: int("numberOfGuests").notNull(),
  totalPrice: int("totalPrice").notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "checked_in", "checked_out", "canceled"]).default("pending").notNull(),
  specialRequests: text("specialRequests"),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

// Guest Preferences - personalization data
export const guestPreferences = mysqlTable("guestPreferences", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: int("bookingId").notNull().references(() => bookings.id),
  roomTemperature: varchar("roomTemperature", { length: 50 }),
  bedPreference: varchar("bedPreference", { length: 100 }),
  dietaryRestrictions: text("dietaryRestrictions"),
  localInterests: text("localInterests"),
  specialOccasion: varchar("specialOccasion", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GuestPreference = typeof guestPreferences.$inferSelect;
export type InsertGuestPreference = typeof guestPreferences.$inferInsert;

// Local Recommendations - personalized suggestions
export const localRecommendations = mysqlTable("localRecommendations", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  category: varchar("category", { length: 100 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  address: text("address"),
  distance: varchar("distance", { length: 50 }),
  rating: int("rating"),
  url: text("url"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LocalRecommendation = typeof localRecommendations.$inferSelect;
export type InsertLocalRecommendation = typeof localRecommendations.$inferInsert;

// Reviews - guest reviews and ratings
export const reviews = mysqlTable("reviews", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  bookingId: int("bookingId").references(() => bookings.id),
  guestName: varchar("guestName", { length: 255 }).notNull(),
  rating: int("rating").notNull(),
  title: varchar("title", { length: 255 }),
  content: text("content"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

// Notifications - email notifications log
export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  hotelId: int("hotelId").notNull().references(() => hotels.id),
  bookingId: int("bookingId").references(() => bookings.id),
  type: mysqlEnum("type", ["booking_confirmation", "checkin_reminder", "checkout_reminder", "admin_alert", "payment_receipt"]).notNull(),
  recipientEmail: varchar("recipientEmail", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  status: mysqlEnum("status", ["pending", "sent", "failed"]).default("pending").notNull(),
  sentAt: timestamp("sentAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;