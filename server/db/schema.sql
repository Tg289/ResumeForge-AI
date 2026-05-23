-- USERS
create table users (
  id uuid primary key,
  email text unique,
  plan text default 'FREE',
  created_at timestamp default now()
);

-- RESUMES
create table resumes (
  id uuid primary key,
  user_id uuid,
  content text,
  ats_score int,
  role_match int,
  created_at timestamp default now()
);

-- VECTOR STORAGE (AI SEARCH)
create extension if not exists vector;

create table resume_vectors (
  id uuid primary key,
  resume_id uuid,
  embedding vector(1536)
);