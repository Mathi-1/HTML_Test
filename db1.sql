
drop tab
CREATE TABLE subscriber (
    subscriber_id        SERIAL PRIMARY KEY,
    msisdn               VARCHAR(15) NOT NULL,         -- phone number
    imsi                 VARCHAR(20) UNIQUE NOT NULL,  -- SIM identifier
    name                 VARCHAR(100) NOT NULL,
    id_type              VARCHAR(20) NOT NULL,         -- e.g., VoterID, Aadhaar
    id_number            VARCHAR(50) NOT NULL,
    current_provider_id  INT NOT NULL,                 -- refers to provider table (if you have one)
    service_type         VARCHAR(20) NOT NULL          -- e.g., prepaid/postpaid
);