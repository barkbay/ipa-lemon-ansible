LemonLDAP-NG + FreeIPA Ansible roles
==============================

These roles allow you to setup a Single Sign On infrastructure. FreeIPA is used as the primary authentication service. LemonLDAP-NG provides to users a SSO facility.

**In order to authenticate peers and secure communications you need to setup your own Certificate Authority (if you don't already have one...)**

1. (Optional) Install custom CA certificates
2. Setup FreeIPA without an embedded Certificate Authority (https://www.freeipa.org/page/V3/CA-less_install)
3. Install and setup LemonLDAP-NG

Requirements
------------

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

ldap:
  ldap_key_password: <ldap_certificate_key_password>
  ldap_admin_password: <the ldap admin password>
  ldap_domain: <the ldap domain, e.g. example.com>

```
