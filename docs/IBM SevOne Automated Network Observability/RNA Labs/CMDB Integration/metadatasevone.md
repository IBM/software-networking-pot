---
sidebar_position: 3
---

# Integrate ServiceNow CI properties into SevOne



## Overview

In this lab we will review how we can copy the attributes available in ServiceNow into SevOne metadata.

The flow of this lab is the following:

* We get the list of current CIs in a table in ServiceNow

* For each of the CIs on ServiceNow, we will check if that CI exists in SevOne

* If the device exists, we will get the list of all the properties available in the CI

* For each of the properties we will check if they are a single value property or a 'link' property (ServiceNow has two types of properties)

* Depending on the type of property, we will push the data into SevOne using the appropiate metadata attribute type (text or URL)



## Prerequirements

In order to complete this lab, it is required to have access to a ServiceNow instance. If you don't have one already, please create one using following the steps defined on this [link](https://developer.servicenow.com/dev.do#!/learn/learning-plans/utah/new_to_servicenow/app_store_learnv2_buildmyfirstapp_utah_personal_developer_instances).

It's important to change your role to admin to be able to use the instance properly (see link [here](https://www.servicenow.com/community/user/ssoregistrationpage?dest_url=https:%2F%2Fwww.servicenow.com%2Fcommunity%2Finstance-help-forum%2Fhow-to-get-out-of-app-engine-studio-and-go-back-to-the-main%2Fm-p%2F286367%2Fthread-id%2F23136) )

**We strongly recommend doing the 'Sync Sevone Devices with ServiceNow' lab first to have the same devices in both platforms**

## ServiceNow - SevOne metadata sync

If SevOne authentication has already been created, please skip this block of actions and continue to step 4.

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

6. Click Create Workflow

	a. Name: Sync ServiceNOW properties with SevOne metadata

	b. Layout type: Sequence


7. Add variables to Start

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

	c. namespace

		i. Name: namespace

		ii. Type: string

		iii. Default Value: "ServiceNow"

		iv. In

		v. Required


![IBM SevOne Automated Network Observability](img/SevOnemetadata/img1.png)

8. Change to Flow View

9. On the left hand side panel, Click on ServiceNow

10. Select "getTable" and drop it after the building block START

	a. Change name to ServiceNow_Get_CIs

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $ServiceNowCredentials

		ii. tableName: "cmdb_ci_ip_device"

11. Add a new building block, Common -> ForEach

	a. Change name to ForEach_CI

	b. Click on the building block to open the right side panel and complete the following fields

		i. list: $ServiceNow_Get_CIs.result.result

12. Inside the LOOP, add a new building block, SevOne -> REST v3 -> Metadata Devices (POST)

	a. Change name to SevOne_Find_Device

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $NMSCredentials

		ii. body -> name -> value: $ForEach_CI.item.name

![IBM SevOne Automated Network Observability](img/SevOnemetadata/img2.png)

13. Add a new building block, Common -> If

	a. Change name to If_Device_Found

	b. Click on the building block to open the right side panel and complete the following fields

		i. condition: $SevOne_Find_Device.result.devices.length > 0

14. In the 'TRUE' branch of the If, add a new building block, Common -> Object -> Object Keys

	a. Change name to Properties

	b. Click on the building block to open the right side panel and complete the following fields

		i. Object: OneOf -> Object

			1. Click Ok

			2. Click on the pencil icon

			3. Type $ForEach_CI.item

![IBM SevOne Automated Network Observability](img/SevOnemetadata/img3.png)

15. Add a new building block, Common -> ForEach

	a. Change name to  ForEach_Property

	b. Click on the building block to open the right side panel and complete the following fields

		i. list: $Properties.result
		
16. Inside the LOOP, add a new building block, Common -> Validation -> Is Object

	a. Change name to IsObject

	b. Click on the building block to open the right side panel and complete the following fields

		i. item: $ForEach_CI.item[$ForEach_Property.item]

17. Add a new building block, Common -> If

	a. Change name to If_Obkect

	b. Click on the building block to open the right side panel and complete the following fields

		i. condition: $IsObject.result

18. In the 'TRUE' branch of the If, add a new building block, SevOne -> REST v3 -> Metadata Admin -> Metadata Admin Patch Device Metadata

	a. Change name to SevOne_Update_Metadata_Object

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $NMSCredentials

		ii. body:

			1. attribute: $ForEach_Property.item

			2. deviceId: $SevOne_Find_Device.result.devices[0].id

			3. namespace: $namespace

			4. url -> values: [{"label": $ForEach_CI.item[$ForEach_Property.item].value,"url": $ForEach_CI.item[$ForEach_Property.item].link }] 

19. In the 'FALSE' branch of the If, add a new building block, SevOne -> REST v3 -> Metadata Admin -> Metadata Admin Patch Device Metadata

	a. Change name to SevOne_Update_Metadata

	b. Click on the building block to open the right side panel and complete the following fields

		i. authKey: $NMSCredentials

		ii. body:

			1. attribute: $ForEach_Property.item

			2. deviceId: $SevOne_Find_Device.result.devices[0].id

			3. namespace: $namespace

			4. text -> [$ForEach_CI.item[$ForEach_Property.item]]

![IBM SevOne Automated Network Observability](img/SevOnemetadata/img4.png)

## Review

20. To test the workflow, click on Run 

21. Go to SevOne (vPAS)

22. Go to any of the devices listed, for example CHI-AP01 and click on the 'Metadata' icon

![IBM SevOne Automated Network Observability](img/SevOnemetadata/img5.png)

23. Scroll down until you see 'ServiceNow', there you will see all the properties from ServiceNow copied into SevOne metadata

![IBM SevOne Automated Network Observability](img/SevOnemetadata/img6.png)



