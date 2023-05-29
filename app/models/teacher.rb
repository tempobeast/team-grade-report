class Teacher < ApplicationRecord

    has_many :courses
    has_many :players, through: :courses
    has_many :subjects, through: :courses
end
