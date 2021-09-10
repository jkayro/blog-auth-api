# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :confirmable,
         :trackable,
         :registerable,
         :recoverable, 
         :rememberable, 
         :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :article, dependent: :destroy

  before_validation :set_uid

  private

  def set_uid
    self[:uid] = self[:email] if self[:uid].blank? && self[:email].present?
  end
end
