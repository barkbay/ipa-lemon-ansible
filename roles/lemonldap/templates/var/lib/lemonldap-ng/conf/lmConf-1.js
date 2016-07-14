{
  "ldapAuthnLevel": 2,
  "ldapPasswordResetAttributeValue": "TRUE",
  "grantSessionRules": {},
  "cookieName": "lemonldap",
  "ldapPasswordResetAttribute": "pwdReset",
  "samlIDPMetaDataXML": null,
  "loginHistoryEnabled": 1,
  "captchaStorageOptions": {},
  "key": "q?sRw,ubPp{IHqhV",
  "facebookExportedVars": {},
  "hiddenAttributes": "_password",
  "portalPingInterval": 60000,
  "dbiExportedVars": {},
  "oidcServiceMetaDataCheckSessionURI": "checksession",
  "timeout": 72000,
  "portalSkin": "bootstrap",
  "ldapSearchDeref": "find",
  "oidcRPMetaDataOptions": {
    "openshift": {
      "oidcRPMetaDataOptionsClientSecret": "asecret",
      "oidcRPMetaDataOptionsDisplayName": "Openshift",
      "oidcRPMetaDataOptionsClientID": "openshift",
      "oidcRPMetaDataOptionsIDTokenExpiration": 3600,
      "oidcRPMetaDataOptionsIDTokenSignAlg": "HS512",
      "oidcRPMetaDataOptionsRedirectUris": "https://openshift-cluster.example.com:8443/oauth2callback/allow_all",
      "oidcRPMetaDataOptionsAccessTokenExpiration": 3600
    }
  },
  "portalSkinRules": {},
  "ldapServer": "ldaps://{{ ldap.fqdn_hostname }}",
  "persistentStorageOptions": {
    "Directory": "/var/lib/lemonldap-ng/psessions",
    "LockDirectory": "/var/lib/lemonldap-ng/psessions/lock"
  },
  "samlSPMetaDataOptions": null,
  "passwordDB": "LDAP",
  "ldapVersion": 3,
  "macros": {
    "_whatToTrace": "$_auth eq 'SAML' ? \"$_user\\@$_idpConfKey\" : \"$_user\""
  },
  "portalAntiFrame": 1,
  "webIDExportedVars": {},
  "globalStorageOptions": {
    "Directory": "/var/lib/lemonldap-ng/sessions",
    "generateModule": "Lemonldap::NG::Common::Apache::Session::Generate::SHA256",
    "LockDirectory": "/var/lib/lemonldap-ng/sessions/lock"
  },
  "managerPassword": "{{ ldap.ldap_admin_password }}",
  "checkXSS": 1,
  "oidcServiceMetaDataIssuer": "https://{{ sso.lemonldap_auth_hostname }}",
  "cfgNum": "22",
  "casAttributes": {},
  "sessionDataToRemember": {},
  "portalUserAttr": "_user",
  "portalDisplayChangePassword": "$_auth =~ /^(LDAP|DBI|Demo)$/",
  "oidcOPMetaDataJSON": {},
  "globalStorage": "Apache::Session::File",
  "portalDisplayResetPassword": 1,
  "oidcServiceMetaDataJWKSURI": "jwks",
  "localSessionStorageOptions": {
    "cache_depth": 3,
    "cache_root": "/tmp",
    "default_expires_in": 600,
    "directory_umask": "007",
    "namespace": "lemonldap-ng-sessions"
  },
  "samlIDPMetaDataOptions": null,
  "portalOpenLinkInNewWindow": "1",
  "ldapPwdEnc": "utf-8",
  "samlSPMetaDataXML": null,
  "issuerDBOpenIDConnectActivation": 1,
  "whatToTrace": "_whatToTrace",
  "exportedVars": {
    "UA": "HTTP_USER_AGENT"
  },
  "domain": "{{ ldap.ldap_domain }}",
  "mailUrl": "https://{{ sso.lemonldap_auth_hostname }}/mail.pl",
  "oidcServiceMetaDataAuthnContext": {},
  "trustedProxies": "",
  "portalDisplayLogout": 1,
  "ldapChangePasswordAsUser": 0,
  "issuerDBGetParameters": {},
  "registerDB": "Demo",
  "portalForceAuthnInterval": 5,
  "CAS_proxiedServices": {},
  "openIdExportedVars": {},
  "googleExportedVars": {},
  "portalCheckLogins": 1,
  "localSessionStorage": "Cache::FileCache",
  "vhostOptions": {
    "test2.example.com": {},
    "{{ sso.lemonldap_manager_hostname }}": {},
    "test1.example.com": {}
  },
  "oidcOPMetaDataOptions": null,
  "oidcServiceMetaDataEndSessionURI": "logout",
  "samlSPMetaDataExportedAttributes": null,
  "oidcServiceMetaDataAuthorizeURI": "authorize",
  "ldapUsePasswordResetAttribute": 1,
  "portalSkinBackground": "Aletschgletscher_mit_Pinus_cembra1.jpg",
  "ldapSetPassword": 0,
  "notificationStorageOptions": {
    "dirName": "/var/lib/lemonldap-ng/notifications"
  },
  "post": {
    "test2.example.com": {},
    "{{ sso.lemonldap_manager_hostname }}": {},
    "test1.example.com": {}
  },
  "captcha_register_enabled": "0",
  "authentication": "LDAP",
  "ldapPort": 636,
  "persistentStorage": "Apache::Session::File",
  "oidcServiceMetaDataRegistrationURI": "register",
  "authChoiceModules": {},
  "groups": {},
  "portal": "https://{{ sso.lemonldap_auth_hostname }}",
  "notificationStorage": "File",
  "logoutServices": {},
  "userDB": "LDAP",
  "ldapPpolicyControl": "1",
  "samlStorageOptions": {},
  "exportedHeaders": {
    "test2.example.com": {
      "Auth-User": "$uid"
    },
    "{{ sso.lemonldap_manager_hostname }}": {},
    "test1.example.com": {
      "Auth-User": "$uid"
    }
  },
  "samlIDPMetaDataExportedAttributes": null,
  "oidcServiceMetaDataTokenURI": "token",
  "ldapBase": "dc=example2,dc=com",
  "issuerDBOpenIDConnectPath": "^/oauth2/",
  "demoExportedVars": {
    "uid": "uid",
    "cn": "cn",
    "mail": "mail"
  },
  "portalDisplayAppslist": 1,
  "oidcOPMetaDataExportedVars": null,
  "captcha_login_enabled": 0,
  "cfgLog": "",
  "portalDisplayLoginHistory": 1,
  "applicationList": {
    "0003-cat": {
      "0005-app": {
        "options": {
          "logo": "database.png",
          "name": "Notifications explorer",
          "description": "Explore WebSSO notifications",
          "display": "auto",
          "uri": "https://{{ sso.lemonldap_manager_hostname }}/notifications.html"
        },
        "type": "application"
      },
      "0004-app": {
        "options": {
          "logo": "configure.png",
          "name": "WebSSO Manager",
          "description": "Configure LemonLDAP::NG WebSSO",
          "display": "auto",
          "uri": "https://{{ sso.lemonldap_manager_hostname }}/manager.html"
        },
        "type": "application"
      },
      "type": "category",
      "catname": "Administration",
      "0006-app": {
        "options": {
          "logo": "database.png",
          "name": "Sessions explorer",
          "description": "Explore WebSSO sessions",
          "display": "auto",
          "uri": "https://{{ sso.lemonldap_manager_hostname }}/sessions.html"
        },
        "type": "application"
      }
    },
    "0001-cat": {
      "type": "category",
      "catname": "PaaS Digital",
      "0002-app": {
        "options": {
          "logo": "tux.png",
          "name": "Openshift Front",
          "description": "Openshift Example",
          "uri": "https://openshift-cluster.example.com:8443/console/",
          "display": "on"
        },
        "type": "application"
      }
    },
    "0007-cat": {
      "0009-app": {
        "options": {
          "logo": "network.png",
          "name": "Offical Website",
          "description": "Official LemonLDAP::NG Website",
          "display": "on",
          "uri": "https://lemonldap-ng.org/"
        },
        "type": "application"
      },
      "0008-app": {
        "options": {
          "logo": "help.png",
          "name": "Local documentation",
          "description": "Documentation supplied with LemonLDAP::NG",
          "display": "on",
          "uri": "https://{{ sso.lemonldap_manager_hostname }}/doc/"
        },
        "type": "application"
      },
      "type": "category",
      "catname": "Documentation"
    }
  },
  "oidcServiceMetaDataUserInfoURI": "userinfo",
  "cfgDate": 1468152985,
  "cfgAuthorIP": "192.168.124.1",
  "ldapExportedVars": {
    "uid": "uid",
    "cn": "cn",
    "mail": "mail"
  },
  "portalDisplayRegister": "0",
  "locationRules": {
    "test2.example.com": {
      "default": "accept",
      "^/logout": "logout_sso"
    },
    "{{ sso.lemonldap_manager_hostname }}": {
      "(?#Configuration)^/(manager\\.html|conf/)": "$uid eq \"{{ sso.admin }}\"",
      "(?#Sessions)/sessions": "$uid eq \"{{ sso.admin }}\"",
      "default": "$uid eq \"{{ sso.admin }}\"",
      "(?#Notifications)/notifications": "$uid eq \"{{ sso.admin }}\""
    },
    "test1.example.com": {
      "default": "accept",
      "^/logout": "logout_sso"
    }
  },
  "oidcOPMetaDataJWKS": null,
  "captcha_mail_enabled": 0,
  "casStorageOptions": {},
  "useSafeJail": 1,
  "oidcStorageOptions": {},
  "ldapAllowResetExpiredPassword": "1",
  "slaveExportedVars": {},
  "ldapTimeout": 120,
  "userControl": "^[\\w\\.\\-@]+$",
  "remoteGlobalStorageOptions": {},
  "reloadUrls": {
    "{{ sso.lemonldap_reload_hostname }}": "https://{{ sso.lemonldap_reload_hostname }}/reload"
  },
  "oidcRPMetaDataExportedVars": {
    "openshift": {
      "email": "mail",
      "name": "uid",
      "family_name": "sn"
    }
  },
  "notification": 1,
  "registerUrl": "https://{{ sso.lemonldap_auth_hostname }}/register.pl",
  "syslog": "",
  "portalForceAuthn": 0,
  "cfgAuthor": "{{ sso.admin }}",
  "securedCookie": 0,
  "managerDn": "uid=admin,cn=users,cn=accounts,dc=example2,dc=com"
}
