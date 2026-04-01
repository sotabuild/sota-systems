CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`roomId` int NOT NULL,
	`guestName` varchar(255) NOT NULL,
	`guestEmail` varchar(320) NOT NULL,
	`guestPhone` varchar(20),
	`checkInDate` timestamp NOT NULL,
	`checkOutDate` timestamp NOT NULL,
	`numberOfGuests` int NOT NULL,
	`totalPrice` int NOT NULL,
	`status` enum('pending','confirmed','checked_in','checked_out','canceled') NOT NULL DEFAULT 'pending',
	`specialRequests` text,
	`stripePaymentIntentId` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `guestPreferences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookingId` int NOT NULL,
	`roomTemperature` varchar(50),
	`bedPreference` varchar(100),
	`dietaryRestrictions` text,
	`localInterests` text,
	`specialOccasion` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `guestPreferences_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `hotelSubscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`moduleId` int NOT NULL,
	`planId` int NOT NULL,
	`stripeSubscriptionId` varchar(255),
	`status` enum('active','paused','canceled','expired') NOT NULL DEFAULT 'active',
	`startDate` timestamp NOT NULL,
	`endDate` timestamp,
	`renewalDate` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `hotelSubscriptions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `hotels` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`description` text,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`address` text,
	`city` varchar(100),
	`country` varchar(100),
	`totalRooms` int DEFAULT 0,
	`stripeCustomerId` varchar(255),
	`logo` text,
	`coverImage` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `hotels_id` PRIMARY KEY(`id`),
	CONSTRAINT `hotels_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `localRecommendations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`category` varchar(100) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`address` text,
	`distance` varchar(50),
	`rating` int,
	`url` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `localRecommendations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `modules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`description` text,
	`icon` varchar(100),
	`category` enum('booking','admin','experience','integration') NOT NULL,
	`stripeProductId` varchar(255) NOT NULL,
	`basePriceUsd` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `modules_id` PRIMARY KEY(`id`),
	CONSTRAINT `modules_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`bookingId` int,
	`type` enum('booking_confirmation','checkin_reminder','checkout_reminder','admin_alert','payment_receipt') NOT NULL,
	`recipientEmail` varchar(320) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`status` enum('pending','sent','failed') NOT NULL DEFAULT 'pending',
	`sentAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pricingPlans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`moduleId` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`tier` enum('basic','premium','enterprise') NOT NULL,
	`priceUsd` int NOT NULL,
	`billingCycle` enum('monthly','annual') NOT NULL,
	`stripePriceId` varchar(255) NOT NULL,
	`features` text,
	`maxRooms` int,
	`maxUsers` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pricingPlans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`bookingId` int,
	`guestName` varchar(255) NOT NULL,
	`rating` int NOT NULL,
	`title` varchar(255),
	`content` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hotelId` int NOT NULL,
	`number` varchar(50) NOT NULL,
	`type` enum('single','double','suite','deluxe','penthouse') NOT NULL,
	`capacity` int NOT NULL,
	`pricePerNight` int NOT NULL,
	`description` text,
	`amenities` text,
	`images` text,
	`virtualTourUrl` text,
	`isAvailable` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rooms_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_roomId_rooms_id_fk` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `guestPreferences` ADD CONSTRAINT `guestPreferences_bookingId_bookings_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `hotelSubscriptions` ADD CONSTRAINT `hotelSubscriptions_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `hotelSubscriptions` ADD CONSTRAINT `hotelSubscriptions_moduleId_modules_id_fk` FOREIGN KEY (`moduleId`) REFERENCES `modules`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `hotelSubscriptions` ADD CONSTRAINT `hotelSubscriptions_planId_pricingPlans_id_fk` FOREIGN KEY (`planId`) REFERENCES `pricingPlans`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `hotels` ADD CONSTRAINT `hotels_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `localRecommendations` ADD CONSTRAINT `localRecommendations_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_bookingId_bookings_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pricingPlans` ADD CONSTRAINT `pricingPlans_moduleId_modules_id_fk` FOREIGN KEY (`moduleId`) REFERENCES `modules`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_bookingId_bookings_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_hotelId_hotels_id_fk` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE no action ON UPDATE no action;