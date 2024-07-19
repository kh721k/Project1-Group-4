drop table if exists likes;
drop table if exists comments;
drop table if exists posts;
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
	connection_id serial primary key not null,

	user_id integer references users(user_id) on delete cascade,
	requester_id integer references users(user_id) on delete cascade,

	is_connected boolean,
	event_time timestamp
);

create table posts (
	post_id serial primary key not null,

	user_id integer references users(user_id) on delete cascade,

	caption text,
	likes integer,
	shares integer,
	event_time timestamp
);

create table comments (
	comment_id serial primary key not null,

	user_id integer references users(user_id) on delete cascade,
	post_id integer references posts(post_id) on delete cascade,

	caption text,
	event_time timestamp
);

create table likes (
	like_id serial primary key not null,

	user_id integer references users(user_id) on delete cascade,
	post_id integer references posts(post_id) on delete cascade,

	event_time timestamp
);