CREATE TABLE "processedCheckoutSession" (
	"sessionId" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "processedCheckoutSession" ENABLE ROW LEVEL SECURITY;