# Dựng lên db trong một tab của console
$ sudo docker-compose up --build db
(Lần thứ hai chạy thì không cần --build)

# Dựng lên server trong tab thứ hai của console
$ sudo docker-compose up --build server

# Chạy migration & seed với knex trong một tab thứ ba
$ sudo docker-compose exec server /bin/bash
$ knex migrate:latest
$ knex seed:run

# Kiểm tra thành quả ở localhost:3001

Nếu thấy như vầy là đúng

{"data":[
    {"id":1,"username":"admin","password":"123","createdAt":"2018-12-26T11:14:20.000Z","updatedAt":null},
    {"id":2,"username":"tdquang","password":"123","createdAt":"2018-12-26T11:14:20.000Z","updatedAt":null}]
}