-- TODO: posts comments likes

drop table if exists connections;
drop table if exists users;


create table users (
	user_id serial primary key not null,

	name varchar(40) not null,

	username varchar(40) unique not null,
	email varchar(40) not null,
	password varchar(40) not null,

	bio text,
	profile_pic varchar(40)
);

create table connections (
	connections_id serial primary key not null,

	user_id integer references users(user_id) on delete cascade,
	requester_id integer references users(user_id) on delete cascade,

	is_connected boolean,
	event_time timestamp
);