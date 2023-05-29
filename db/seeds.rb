puts "Start seeding"

Player.create(first_name: "Dave", last_name: "Davies", number: 32, grade_level: 10, team: "JV", position: "RB")
Player.create(first_name: "Steve", last_name: "Stevens", number: 34, grade_level: 11, team: "V", position: "DB")
Player.create(first_name: "Rick", last_name: "Richards", number: 92, grade_level: 9, team: "F", position: "DL")
Player.create(first_name: "Harold", last_name: "Harris", number: 54, grade_level: 12, team: "V", position: "LB")

Teacher.create(first_name: "Jeanna", last_name: "Cleangeenas")
Teacher.create(first_name: "Gordon", last_name: "Gordontons")
Teacher.create(first_name: "Flip", last_name: "Griddles")
Teacher.create(first_name: "Ned", last_name: "Ryerson")
Teacher.create(first_name: "Bart", last_name: "Simpson")
Teacher.create(first_name: "Slim", last_name: "Richelds")
Teacher.create(first_name: "Gwen", last_name: "Sven")

Subject.create(name: "Spanish")
Subject.create(name: "Calculus")
Subject.create(name: "Biology")
Subject.create(name: "Chemistry")
Subject.create(name: "Physics")
Subject.create(name: "Computer Science")
Subject.create(name: "Japanese")

Course.create(teacher_id: 1, player_id: 2, subject_id:6, period: 2)
Course.create(teacher_id: 2, player_id: 2, subject_id:5, period: 3)
Course.create(teacher_id: 3, player_id: 2, subject_id:4, period: 4)
Course.create(teacher_id: 4, player_id: 2, subject_id:3, period: 5)
Course.create(teacher_id: 5, player_id: 2, subject_id:7, period: 6)
Course.create(teacher_id: 6, player_id: 2, subject_id:2, period: 7)
Course.create(teacher_id: 7, player_id: 2, subject_id:1, period: 1)

puts "Done seeding"