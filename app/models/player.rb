class Player < ApplicationRecord

    def schedule
        self.courses.all.order(:period).map do |c|
            {period: c.period, subject: {id: c.subject.id, name: c.subject.name}, teacher: {id: c.teacher.id, last_name: c.teacher.last_name}}
        end
    end

    def full_name
        "#{self.first_name} #{self.last_name}"
    end

    has_many :courses
    has_many :teachers, through: :courses
    has_many :subjects, through: :courses
end
