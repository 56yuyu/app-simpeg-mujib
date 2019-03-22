# Test Application Programmer Mujib

> Sistem Informasi Kepegawaian was implemented with SPAs and Restful.



## Application Environment

>Angular js v7.2.10

>Spring boot v2.0.3

>Postgresql v9.6.12


## Tools

Download nodejs latest version :
https://nodejs.org/en/

Download spring tool suites v3.9.6 :
https://spring.io/tools3/sts/legacy

Download postgresql v9.6.12 :
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

Download visual studio code latest version : 
https://code.visualstudio.com/


## Installation

### Database

- Database yang digunakan `simpegdb` .
- Nama table `akun` dan `pegawai` .
- Buka script pgsql pada folder `database/simpegdb/scriptdb` kemudian jalankan script atau buat manual.
  database dan table lalu import file .csv dari folder `database/simpegdb/akun.csv` dan `database/simpegdb/pegawai.csv` .
- Struktur data :

TABLE akun

    id_akun bigint NOT NULL,
    username character varying(50) COLLATE pg_catalog."default",
    password character varying(15) COLLATE pg_catalog."default",
    nama character varying(50) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT akun_pkey PRIMARY KEY (id_akun)

TABLE pegawai

    id_pegawai bigint NOT NULL,
    alamat character varying(255) COLLATE pg_catalog."default",
    divisi character varying(255) COLLATE pg_catalog."default",
    jabatan character varying(255) COLLATE pg_catalog."default",
    jenis_kelamin integer,
    lama_bekerja integer,
    nama character varying(255) COLLATE pg_catalog."default",
    nip character varying(255) COLLATE pg_catalog."default",
    status boolean,
    telpon character varying(255) COLLATE pg_catalog."default",
    usia integer,
    CONSTRAINT pegawai_pkey PRIMARY KEY (id_pegawai)

- Script sql :

>CREATE DATABASE simpegdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

>CREATE TABLE public.akun
(
    id_akun bigint NOT NULL,
    username character varying(50) COLLATE pg_catalog."default",
    password character varying(15) COLLATE pg_catalog."default",
    nama character varying(50) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT akun_pkey PRIMARY KEY (id_akun)
)
>WITH (
    OIDS = FALSE
)
>TABLESPACE pg_default;

>ALTER TABLE public.akun
    OWNER to postgres;

>INSERT INTO public.akun(
	id_akun, username, password, nama, email)
	VALUES (1, 'admin', 'admin', 'admin portal', 'admin@gmail.com');

>CREATE TABLE public.pegawai
(
    id_pegawai bigint NOT NULL,
    alamat character varying(255) COLLATE pg_catalog."default",
    divisi character varying(255) COLLATE pg_catalog."default",
    jabatan character varying(255) COLLATE pg_catalog."default",
    jenis_kelamin integer,
    lama_bekerja integer,
    nama character varying(255) COLLATE pg_catalog."default",
    nip character varying(255) COLLATE pg_catalog."default",
    status boolean,
    telpon character varying(255) COLLATE pg_catalog."default",
    usia integer,
    CONSTRAINT pegawai_pkey PRIMARY KEY (id_pegawai)
)
>WITH (
    OIDS = FALSE
)
>TABLESPACE pg_default;

>ALTER TABLE public.pegawai
    OWNER to postgres;

### Backend

`http://localhost:8888/api/pegawai/`

- Open project WebserviceResrMujib di dalam folder backend, gunakan IDE spring tool suites.
- Kemudian atur application.properties seperti dibawah ini (bisa disesuaikan dgn settingan masing-masing)

  spring.datasource.url=jdbc:postgresql://localhost/simpegdb
  spring.datasource.username=postgres
  spring.datasource.password=mispass123
  spring.jpa.generate-ddl=true
  server.port=8888

- Port server yang digunakan `8888` .
- Untuk menjalankan aplikasi klik kanan pada project, click Run As kemudian pilih Spring Boot App.


### Frontend

`http://localhost:4200/`

- Open project spa-simpeg-mujib di dalam folder frontend, gunakan IDE visual studio code bisa juga open project menggunakan terminal/cmd. 
- Open terminal/cmd kemudian ke project destination `cd spa-simpeg-mujib`, jalankan perintah `npm install` untuk melakukan instalasi node_modules, kemudian jalankan perintah `ng serve --open` .
- Jika menggunakan vs code, pilih terminal pada menu lalu click New Terminal, jalankan perintah `npm install` untuk melakukan instalasi node_modules, kemudian jalankan perintah `ng serve --open` .


### Documentation

See documentation project here https://drive.google.com/open?id=1HIQHHnyKDQ6tMOlICMWpJxABRWOWtCU2
