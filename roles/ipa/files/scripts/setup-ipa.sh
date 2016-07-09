#!/bin/bash

now="$(date)"
echo "===== $now =====" >> /tmp/ipa-lemon-ansible.log

if [ -z "${ldap_key_password}" ]; then
    >&2 echo "Need to set ldap_key_password to unlock private key"
    exit 1
  else
      echo "ldap_key_password : OK" >> /tmp/ipa-lemon-ansible.log
fi

if [ -z "${ldap_admin_password}" ]; then
    >&2 echo "Need to set ldap_admin_password to set the admin password"
    exit 1
else
    echo "ldap_admin_password : OK" >> /tmp/ipa-lemon-ansible.log
fi

if [ -z "${ldap_domain}" ]; then
    >&2 echo "Need to set ldap_domain"
    exit 1
else
    echo "ldap_domain is ${ldap_domain}" >> /tmp/ipa-lemon-ansible.log
fi

ldap_realm=`echo ${ldap_domain} | awk '{print toupper($0)}'`
echo "ldap_realm is ${ldap_realm}" >> /tmp/ipa-lemon-ansible.log


root_pem=/var/lib/ipa/root.pem
freeipa_pem=/var/lib/ipa/freeipa.pem

if [ ! -f ${root_pem} ]; then
    echo "CA Root pem not found in ${root_pem} !" >> /tmp/ipa-lemon-ansible.log
    exit 2
fi

if [ ! -f ${freeipa_pem} ]; then
    echo "FreeIPA pem not found in ${freeipa_pem} !" >> /tmp/ipa-lemon-ansible.log
    exit 2
fi

/usr/sbin/ipa-server-install \
           --dirsrv-cert-file=${freeipa_pem} \
           --http-cert-file=${freeipa_pem} \
           --dirsrv-pin=${ldap_key_password} \
           --http-pin=${ldap_key_password} \
           --ca-cert-file=${root_pem} \
           -p ${ldap_admin_password} \
           -a ${ldap_admin_password} \
           -r ${ldap_realm} \
           --domain=${ldap_domain} \
           --no-ntp \
           --unattended
