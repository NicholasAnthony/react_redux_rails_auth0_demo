class User < ApplicationRecord
  # has_secure_password validations: false

  def self.from_token_payload(payload)
    where(sub: payload["sub"]).first_or_initialize.tap do |user|
      user.sub = payload["sub"]
      user.save!
    end
  end

end