2 files must be here :

1. root.pem
2. freeipa.pem

freeipa.pem is the cert file for freeipa, you can generate it with the following command :

```
cat freeipa.example.com.key.pem freeipa.example.com.cert.pem intermediate.pem root.pem > freeipa.pem
```

where :

* freeipa.example.com.key.pem : FreeIPA private server key
* freeipa.example.com.cert.pem : FreeIPA public server cert
* intermediate.pem : Intermediate certificate
* root.pem : Root certificate

WARNING : freeipa.example.com.key.pem and freeipa.pem contains the private key, DO NOT COMMIT OR SHARE THESE FILES !
