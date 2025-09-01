
select * from subscriber;

cREATE TABLE provider (
    provider_id SERIAL PRIMARY KEY,
    provider_code VARCHAR(10) NOT NULL,
    provider_name VARCHAR(50) NOT NULL,
    api_endpoint VARCHAR(100) NOT NULL
);
SELECT column_name, data_type, is_nullable
FROM information_schema.columns WHERE table_name = 'subscriber';
INSERT INTO provider (provider_code, provider_name, api_endpoint)
VALUES 
('VOD', 'Vodafone', 'vodafone-service'),
('AIR', 'Airtel', 'airtel-service'),
('JIO', 'Jio', 'jio-service'),
('BSNL', 'BSNL', 'bsnl-service');

ALTER TABLE subscriber
ADD CONSTRAINT fk_subscriber_current_provider_id
FOREIGN KEY (current_provider_id)
REFERENCES provider(provider_id);

CREATE TABLE user_upc (
  msisdn VARCHAR(15) PRIMARY KEY,
  upc VARCHAR(32) NOT NULL,
  status VARCHAR(10) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'revoked'))
);
