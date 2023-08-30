---
sidebar_position: 2
---

# Connections Demo

## Overview Story

This story demonstrates how workflows works and how they can be used to go from a high level report to a more granular one, allowing us to troubleshoot problems in a much more efficient way.

## Story

We have a look at the most severe alerts that are active and we see a big drop of VPN connections on one of the firewalls. We try to correlate the drop of connections with other metrics and we find out that there is a correlation between drop of connections and high CPU. Reviewing the top processes using CPU we identify that the SSL process that is the one having issues, and using data analytics we realize this is not something normal (baseline). Finally reviewing the flows (using metric to flow) we identify a big surge of TCP SYN connections (potential DDoS attack) that is generating a high CPU load on the SSL process, that is impacting on the VPN connections. Hence we have identified the root cause of the issue and the IP addresses generating the issue, therefore we can configure our firewall or IPS/IDS to block those connection attempts.


## Recording 

[Connections Demo Video](https://ibm.seismic.com/app?ContentId=47869caf-c699-40ff-9413-9dca21f83ef7#/doccenter/861ea1fd-99e0-44d7-9135-85412e5c28d1/doc/%252Fdd3359e5f7-a856-a91b-7688-41024b2ac637%252FdfNTY4NmVhOWItY2RkNS04ZWY3LTZkNzItZTQwZjczMWUyMjk1%252CPT0%253D%252CQXV0b21hdGlvbg%253D%253D%252FdfNDRmODBlMzMtY2ViMC0zMDI1LTVhNDEtNzg2OTg4MWVmZDBl%252CPT0%253D%252CU2V2T25l%252FdfOTRiYmU4NTQtNWY4NC03Y2QyLWZjYWUtOGIxYmFmZjkyZThk%252CPT0%253D%252CRGVtbw%253D%253D%252Flf6af129b2-8928-4093-9555-8733cb99538e//?mode=view&parentPath=sessionStorage)

## Script

[Connections Demo Slides](https://ibm.seismic.com/app?ContentId=47869caf-c699-40ff-9413-9dca21f83ef7#/doccenter/861ea1fd-99e0-44d7-9135-85412e5c28d1/doc/%252Fdd3359e5f7-a856-a91b-7688-41024b2ac637%252FdfNTY4NmVhOWItY2RkNS04ZWY3LTZkNzItZTQwZjczMWUyMjk1%252CPT0%253D%252CQXV0b21hdGlvbg%253D%253D%252FdfNDRmODBlMzMtY2ViMC0zMDI1LTVhNDEtNzg2OTg4MWVmZDBl%252CPT0%253D%252CU2V2T25l%252FdfOTRiYmU4NTQtNWY4NC03Y2QyLWZjYWUtOGIxYmFmZjkyZThk%252CPT0%253D%252CU2VsbGVyIGVuYWJsZW1lbnQ%253D%252Flf9fa01c2f-0793-41d5-951c-1fb82ce66a3b//?mode=view&parentPath=sessionStorage)
