create database collage_db;

use collage_db;

create table login(id varchar(10) not null , username varchar(10) not null, password varchar(10) not null, about varchar(10) not null, img varchar(10) not null, primary key(id));
create table marks(id varchar(10), english varchar(3)  , science varchar(3) , maths varchar(3) ,computer  varchar(3), arts varchar(3) ,primary key(id), foreign key (id) references login(id) on delete cascade);
insert into login values('p0','rakesh','qwert','Principal',''),('t1','english','eng','Teacher',''),('t2','science','sci','Teacher',''),('t3','maths','mat','Teacher',''),('t4','computer','com','Teacher',''),('t5','art','art','Teacher','');

select * from login;
select * from marks;

select * from login where about='Student';
insert into marks values('s3',70,80,60,50,60),('s4',90,80,40,50,20);

insert into marks values('s5','-','-','-','-','-');
insert into marks values('s1',70,80,60,50,60),('s2',90,80,40,50,20);
insert into login values('p0','rakesh','qwert','Principal','');
select marks.*,login.* from marks,login where marks.id='s4' and  login.id=marks.id;
delete from login where id ='s3';
DELETE FROM marks WHERE id='s3';
desc user;
desc marks;

UPDATE marks SET arts='90'WHERE id ='s5';
UPDATE user SET username='rakesh', password='1234' WHERE id =2;
drop table login;
drop table marks;