# `www.omniaseclabs.com` — resolved DNS correction

Verified 18 October 2026. The founder manages the domain through Northwest Registered Agent. The public registry names DomainRegistry.com LLC, but that registry entry did not establish the founder's customer portal; the earlier suggestion to use DomainRegistry's login was incorrect for this account. Use the founder's [Northwest dashboard](https://accounts.northwestregisteredagent.com/#/dashpanel) for domain administration. Authoritative nameservers remain `ns1.hosting.businessidentity.llc` and `ns2.hosting.businessidentity.llc`.

## Root cause and completed change

Before the correction, `www` resolved through the wildcard `*.omniaseclabs.com` A record to `66.223.49.89`, rather than Vercel. The earlier interpretation that there was a dedicated `www` A record was incorrect; the founder's Northwest dashboard screenshot clarified the wildcard record. Neither existing A record needed removal.

With the founder's approval, this agent configured `www.omniaseclabs.com` on the existing Vercel project as a **308 redirect to `omniaseclabs.com`**. The founder then used Northwest's Mark assistant to add an explicit CNAME:

| Name | Type | Target |
|---|---|---|
| `www` | CNAME | `c60ac4e8c8c23db1.vercel-dns-017.com.` |

The explicit record takes precedence over the wildcard for `www`. Mark reported that the root/wildcard A records, MX, TXT, other CNAMEs and nameservers were preserved. This agent received no account credentials and did not log into the Northwest account.

## Independent verification

Google's public DNS-over-HTTPS resolver returned these successful answers after the change:

- `www.omniaseclabs.com` CNAME → `c60ac4e8c8c23db1.vercel-dns-017.com.` (TTL 300).
- `omniaseclabs.com` A → `216.198.79.1` (TTL 300).
- `*.omniaseclabs.com` A → `66.223.49.89` (TTL 60).

Vercel's authenticated domain-configuration check reports `misconfigured: false`, with no conflicts and resolved addresses `216.198.79.1` and `64.29.17.1`. Its summary omits the CNAME chain; the public CNAME lookup above separately confirms the record.

Bounded public HTTPS checks, with TLS verification enabled, returned:

| Request | Status | Location |
|---|---|---|
| `https://www.omniaseclabs.com/` | 308 | `https://omniaseclabs.com/` |
| `https://www.omniaseclabs.com/projects?source=dns-check` | 308 | `https://omniaseclabs.com/projects?source=dns-check` |
| `https://omniaseclabs.com/` | 200 | — |

The hostname defect is closed. These observations confirm DNS routing, HTTPS reachability and the redirect from this environment; they do not independently verify every resolver or mailbox operation. No apex, wildcard, email or nameserver change is required for this fix.
