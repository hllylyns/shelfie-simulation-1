create table inventory (
    item_id serial primary key not null,
    name varchar(100) not null,
    image_url text not null 
    price decimal not null,
)