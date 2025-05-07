DROP TABLE noticias;
create table noticias( 
    id_noticia int(11) not null PRIMARY KEY,
    titulo varchar(255), fecha date,
    desc_noticia varchar(255), 
    imagen varchar(255), 
    categoria varchar(255), 
    active varchar(255) 
    );