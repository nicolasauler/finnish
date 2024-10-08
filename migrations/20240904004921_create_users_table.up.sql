CREATE TABLE users (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username text NOT NULL,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    verification_code varchar(255),
    code_expires_at timestamptz,
    verified boolean NOT NULL DEFAULT FALSE,
    otp_enabled boolean NOT NULL DEFAULT FALSE,
    otp_verified boolean NOT NULL DEFAULT FALSE,
    otp_secret varchar(32)
);

CREATE INDEX idx_verification_code ON users (verification_code);

CREATE TABLE groups (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL UNIQUE
);

CREATE TABLE users_groups (
    user_id integer NOT NULL REFERENCES users (id) ON DELETE RESTRICT,
    group_id integer NOT NULL REFERENCES GROUPS (id) ON DELETE RESTRICT,
    PRIMARY KEY (user_id, group_id)
);

CREATE TABLE permissions (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL UNIQUE
);

CREATE TABLE groups_permissions (
    group_id integer NOT NULL REFERENCES GROUPS (id) ON DELETE RESTRICT,
    permission_id integer NOT NULL REFERENCES permissions (id) ON DELETE RESTRICT,
    PRIMARY KEY (group_id, permission_id)
);

-- populating permissions and groups
INSERT INTO GROUPS (name)
    VALUES ('pseudo-user');

-- user before first 2FA
INSERT INTO GROUPS (name)
    VALUES ('user');

INSERT INTO permissions (name)
    VALUES ('protected:read');

-- 2fa routes
INSERT INTO permissions (name)
    VALUES ('restricted:read');

-- restricted routes
INSERT INTO groups_permissions (group_id, permission_id)
    VALUES ((
            SELECT
                id
            FROM
                GROUPS
            WHERE
                name = 'pseudo-user'), (
                SELECT
                    id
                FROM
                    permissions
                WHERE
                    name = 'protected:read')),
        ((
            SELECT
                id
            FROM GROUPS
            WHERE
                name = 'user'), (
            SELECT
                id
            FROM permissions
        WHERE
            name = 'restricted:read'));
