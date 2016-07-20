LemonLDAP-NG + FreeIPA Ansible roles
==============================

These roles allow you to setup a Single Sign On infrastructure. FreeIPA is used as the primary authentication service. LemonLDAP-NG provides to users Single-Sign-On.

**In order to authenticate peers and secure communications you have to setup your own Certificate Authority (if you don't already have one...)**

1. (Optional) Install custom CA certificates
2. Setup FreeIPA without an embedded Certificate Authority (https://www.freeipa.org/page/V3/CA-less_install)
3. Install and setup LemonLDAP-NG

Requirements
------------

If SELinux is enabled you have to allow Apache to connect to an LDAP server :

```
setsebool -P httpd_can_connect_ldap 1
```

Some variables must be stored in a vault called secrets.yml :

```
ansible-vault create secrets.yml
```
or
```
ansible-vault edit secrets.yml
```
The secrets must contain the following variables :
```
sso:
  lemonldap_auth_hostname: sso.example.com
  lemonldap_manager_hostname: manager.example.com
  lemonldap_reload_hostname: reload.example.com
  admin: admin
  certs_and_keys:
    sso.cert.pem: |
      -----BEGIN CERTIFICATE-----
      MIIFETCCAvmgAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCRlIx
      DjAMBgNVBAgMBVBhcmlzMRIwEAYDVQQKDAlCaWRvdSBMdGQxHzAdBgNVBAMMFkJp
      [...]
      UJGVS+0=
      -----END CERTIFICATE-----
    sso.key-nopass.pem: |
      -----BEGIN RSA PRIVATE KEY-----
      MIIEpQIBAAKCAQEA83zmzS/5aQkzrq6lx+uXiVQcbIbtNNb0lWiGZ3QNaEyi8KkX
      [...]
      YMwfTJ/8WT8yme/YYm1HWUr6lRc8LNidOWEKkSOZ6iY4m1IEz9R+yro=
      -----END RSA PRIVATE KEY-----
     sso-manager.cert.pem: |
      -----BEGIN CERTIFICATE-----
      MIIFETCCAvmgAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCRlIx
      DjAMBgNVBAgMBVBhcmlzMRIwEAYDVQQKDAlCaWRvdSBMdGQxHzAdBgNVBAMMFkJp
      [...]
      UJGVS+0=
      -----END CERTIFICATE-----
    sso-manager.key-nopass.pem: |
      -----BEGIN RSA PRIVATE KEY-----
      MIIEpQIBAAKCAQEA83zmzS/5aQkzrq6lx+uXiVQcbIbtNNb0lWiGZ3QNaEyi8KkX
      [...]
      YMwfTJ/8WT8yme/YYm1HWUr6lRc8LNidOWEKkSOZ6iY4m1IEz9R+yro=
      -----END RSA PRIVATE KEY-----
    sso-reload.cert.pem: |
      -----BEGIN CERTIFICATE-----
      MIIFETCCAvmgAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCRlIx
      DjAMBgNVBAgMBVBhcmlzMRIwEAYDVQQKDAlCaWRvdSBMdGQxHzAdBgNVBAMMFkJp
      [...]
      UJGVS+0=
      -----END CERTIFICATE-----
     sso-reload.key-nopass.pem: |
       -----BEGIN RSA PRIVATE KEY-----
       MIIEpQIBAAKCAQEA83zmzS/5aQkzrq6lx+uXiVQcbIbtNNb0lWiGZ3QNaEyi8KkX
       [...]
       YMwfTJ/8WT8yme/YYm1HWUr6lRc8LNidOWEKkSOZ6iY4m1IEz9R+yro=
       -----END RSA PRIVATE KEY-----

ldap:
  ldap_key_password: <ldap_certificate_key_password>
  ldap_admin_password: <the ldap admin password>
  ldap_domain: <the ldap domain, e.g. example.com>
  fqdn_hostname: <the fqdn hostname, e.g. ldap.example2.com>
  certs_and_keys:
  root.pem: |
    -----BEGIN CERTIFICATE-----
    MIIFSDCCAzCgAwIBAgIJAOsi5j3LFDazMA0GCSqGSIb3DQEBCwUAMDExCzAJBgNV
    BAYTAkZSMQ4wDAYDVQQIDAVQYXJpczESMBAGA1UECgwJQmlkb3UgTHRkMB4XDTE2
    MDcwOTExMzIxNloXDTM2MDcwNDExMzIxNlowMTELMAkGA1UEBhMCRlIxDjAMBgNV
    [....]
  freeipa.pem: |
    -----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: AES-256-CBC,C2D37634C41CF435BE051D1692B521FE

    iw/BwWD9BCeBZku+miOlJbEzcQPOAzZhKF+gw/t1WezQVKZ3B2qe0k9AGTI2hq8t
    69+7zK+ZVH9/k6ejkwAy8mksC6DP+N2E7lSuIlhnzdUDLhtlCxKBvd911xczPkdc
    [...]
    uSZ6FrGLJq9WalU/zU6B1cu2yAjAcr/63g4jHPxoH8uSy6mQGLplAOx67ujs8I70
    uuOpBwBcJ4vNU2YLuPpYu1mQNMvdas0sjimdvCYtrJDNm7+5i279OWVIBWZDDHK0
    -----END RSA PRIVATE KEY-----
    -----BEGIN CERTIFICATE-----
    MIIFEjCCAvqgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCRlIx
    DjAMBgNVBAgMBVBhcmlzMRIwEAYDVQQKDAlCaWRvdSBMdGQxHzAdBgNVBAMMFkJp

    -----END CERTIFICATE-----
```

Gogs example
-------------

There is a Gogs SSO example, if you want to enable it :

Add the internal Gogs hostname in the secrets :

```
sso:
  gogs_internal_name: gogs.int.example.com:3000
```

and add this to your Gogs configuration :

```
[service]
ENABLE_REVERSE_PROXY_AUTHENTICATION = true
ENABLE_REVERSE_PROXY_AUTO_REGISTRATION = true

[security]
REVERSE_PROXY_AUTHENTICATION_USER = X-Forwarded-User
```
