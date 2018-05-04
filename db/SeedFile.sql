create table inventory (
    item_id serial primary key,
    name varchar(100),
    image_url text,
    price decimal
)