LemonLDAP-NG + FreeIPA Ansible roles
==============================

These roles allow you to setup a Single Sign On infrastructure. FreeIPA is used as the primary authentication service. LemonLDAP-NG provides to users a SSO facility.

**In order to authenticate peers and secure communications you need to setup your own Certificate Authority (if you don't already have one...)**

1. (Optional) Install custom CA certificates
2. Setup FreeIPA without an embedded Certificate Authority (https://www.freeipa.org/page/V3/CA-less_install)
3. Install and setup LemonLDAP-NG

Requirements
------------

If you are using SELinux allow Apache to connect to an LDAP server :

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

ldap:
  ldap_key_password: <ldap_certificate_key_password>
  ldap_admin_password: <the ldap admin password>
  ldap_domain: <the ldap domain, e.g. example.com>
  fqdn_hostname: <the fqdn hostname, e.g. ldap.example2.com>


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
