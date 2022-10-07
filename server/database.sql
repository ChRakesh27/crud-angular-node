create database collage_db;

use collage_db;

create table user(id int not null auto_increment,username varchar(20) not null,password varchar(20) not null,primary key(id,password));
select * from user;
desc user;
drop table user;