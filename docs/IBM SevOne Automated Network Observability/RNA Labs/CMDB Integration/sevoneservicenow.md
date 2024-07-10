---
sidebar_position: 1
---

# Sync SevOne Devices with ServiceNow



## Overview

In this lab we will review how we can make sure that all the devices monitored in SevOne are included in ServiceNow, and they are not, add them in ServiceNow.

The flow of this lab is the following:

* We get the list of current devices in SevOne

* For each of these devices, we will get the name and try to find if there a device with the same name in ServiceNow

* If the device already exists in ServiceNow, no further actions will be taken

* If the device is not found in ServiceNow, a new device will be added in ServiceNow with the name, ipaddress and description from SevOne


NOTE: there are different tables available in ServiceNow where we can store device details, the one chosen for this lab is the cmdb_ci_ip_device table, but it can be easily changed to another table (or multiple tables).


## Prerequirements

In order to complete this lab, it is required to have access to a ServiceNow instance. If you don't have one already, please create one using following the steps defined on this [link](https://developer.servicenow.com/dev.do#!/learn/learning-plans/utah/new_to_servicenow/app_store_learnv2_buildmyfirstapp_utah_personal_developer_instances).

It's important to change your role to admin to be able to use the instance properly (see link [here](https://www.servicenow.com/community/user/ssoregistrationpage?dest_url=https:%2F%2Fwww.servicenow.com%2Fcommunity%2Finstance-help-forum%2Fhow-to-get-out-of-app-engine-studio-and-go-back-to-the-main%2Fm-p%2F286367%2Fthread-id%2F23136) )

## SevOne - ServiceNow device sync


If SevOne authentication has already been created, please skip this block of actions and continue to step 5.

1. Log into SANO automation platform

2. Go to Authentications

3. Click  Create Authentication

	a. Name: SevOne

	b. Service: SevOne

	c. **Protocol: http://** (<-- important)

	d. Host: 10.0.0.10

	e. Username: admin

	f. Password: SevOne

![IBM SevOne Automated Network Observability](img/Lab_Alerts/Img1.png)

If ServiceNow authentication has already been created, please skip this block of actions and continue to step 5.

4. Click Create Authentication

	a. Name: ServiceNow

	b. Service: ServiceNow

	c. Protocol: https://

	d. Host: (Your SNOW instance URL, example: dev109667.service-now.com)

	e. Username: (Your SNOW instance username, example: admin)

	f. Password: (Your SNOW instance password)

5. Go to **Workflows**

5. Click Create Workflow

	a. Name: Sync SevOne Devices with ServiceNow

	b. Layout type: Sequence


6. Add variables to Start

	a. NMSCredentials

		i. Name: NMSCredentials

		ii. Type: Authentication -> SevOne

		iii. Default Value: "admin/SevOne"

		iv. In

		v. Required

	b. ServiceNowCredentials

		i. Name: ServiceNowCredentials

		ii. Type: Authentication -> ServiceNow

		iii. Default Value: "admin/ServiceNow"

		iv. In

		v. Required

	c. table

		i. Name: table

		ii. Type: String

		iii. Default Value: "cmdb_ci_ip_device"

		iv. In

		v. Required


![IBM SevOne Automated Network Observability](img/SevOneSnow/img1.png)

7. Change to Flow View

8. On the left hand side panel, Click on SevOne-> REST v3 -> Metadata

9. Select "Metadata Devices (POST)" and drop it after the building block START

	a. Change name to SevOne_Get_Devices

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $NMSCredentials

10. Add a new building block, Common -> ForEach

	a. Change name to ForEach_Device

	b. Click on the building block to open the right side panel and complete the following fields

		i. list: $SevOne_Get_Devices.result.devices

11. Inside the 'LOOP' in the foreach, add a new building block, ServiceNow -> getTable

	a. Change name to ServiceNow_Devices

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $ServiceNowCredentials

		ii. tableName: $table

		iii. query: "name=" + $ForEach_Device.item.name


![IBM SevOne Automated Network Observability](img/SevOneSnow/img2.png)


12. Add a new building block, Common -> If

	a. Change name to If_Not_Found

	b. Click on the building block to open the right side panel and complete the following fields

		i. condition: $ServiceNow_Devices.result.result.length == 0

13. In the 'TRUE' branch of the IF, add a new building block, ServiceNow -> createTable

	a. Change name to SevOne_Create_Device

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $ServiceNowCredentials

		ii. tableName: $table
		
		iii. Table: click on the 'pencil' icon to open a new window and past the following content

				{
				    "name": $ForEach_Device.item.name,
    				"ip_address": $ForEach_Device.item.ip,
    				"short_description": $ForEach_Device.item.description
				}

		iv. content_type: "application/json"

![IBM SevOne Automated Network Observability](img/SevOneSnow/img3.png)

NOTE: you can delete the last 'Assign' building block that was part of the original workflow. It is ok if you want to leave it there too.

## Review

14. To test the workflow, click on Run (it will take around 1 minute to complete)

15. Go to your ServiceNow instance

	i. Click on All

	ii. Search for CMDB

	iii. Click on CMDB workspace (inside the CMDB workspace group)

![IBM SevOne Automated Network Observability](img/SevOneSnow/img4.png)

16. Scroll down where CI overview is, and click on the 'Devices' column

![IBM SevOne Automated Network Observability](img/SevOneSnow/img5.png)

17. Click on IP Device, and you should see a list with the devices that are in SevOne

![IBM SevOne Automated Network Observability](img/SevOneSnow/img6.png)

