---
sidebar_position: 11
---

# IBM Rapid Network Automation (IRNA)

## Overview
In this lab we will learn how we can use SevOne automation capabilities to automate actions in SevOne without the need of coding.


# High Frequency Polling


1.	Log into Automation platform
2.	Go to Authentications
3.	Click  Create Authentication
    - a. Name: SevOne
    - b. Service: SevOne
    - c. **Protocol: http://** (<-- important)
    - d. Host: 10.0.0.10
    - e. Username: admin
    - f. Password: SevOne
    
![IBM SevOne Automated Network Observability](img/Lab%209%20-%201.png)

4.	Go to **Workflows**
5.	Click Create Workflow
    - a. Name: Your Name – HFP
    - b. Layout type: Sequence

![IBM SevOne Automated Network Observability](img/Lab%209%20-%202.png)

6.	Add variables to Start

    - a. Name: deviceid -> Type: Number -> Default Value: 1 -> In -> Required
    - b. Name: objectid -> Type: Number -> Default Value: 1  -> In -> Required
    - c. Name: frequency -> Type: Number -> Default Value: 20  -> In Required   
    - d. Name: action -> Type: String -> Default Value: "Set"  -> In -> Required
    - e. Name: plugin -> Type: String -> Default Value: "ICMP“ -> In -> Required
    - f. Name: NMSCredentials -> Type: Authentication (SevOne) -> Default Value: “admin/SevOne“ -> In 
    
![IBM SevOne Automated Network Observability](img/Lab%209%20-%203.png)

7.	Change view to Flow 

![IBM SevOne Automated Network Observability](img/Lab%209%20-%204.png)

8.	On the left hand side panel, search for SevOne -> REST v3 -> Polling -> Polling Remove HFP Object

    - a. Drag and drop that tile to the first position in the workflow after Start
    - b. Change Name of tile to SevOne_Delete_HFP
    - c. Complete the details in Object Editor
    - d. AuthKey: $NMSCredentials 
    - e. deviceId: $deviceid
    - f. objectId: $objectid
    
![IBM SevOne Automated Network Observability](img/Lab%209%20-%205.png)

9.	On the left hand side panel, go to Common -> Assign and click on the star icon to make it a favourite

![IBM SevOne Automated Network Observability](img/Lab%209%20-%206.png)

10.	Click on the + icon under SevOne_Delete_HFP and select Assign
    - a. Variable: $result
    - b. $value: $SevOne_Delete_HFP.result
    
![IBM SevOne Automated Network Observability](img/Lab%209%20-%208.png)

11.	On the left hand side panel, go to Common -> If and move it under the last tile 
    - a. Condition-> $action == "Set" 
    - b. On the TRUE branch add tile SevOne -> REST v3 -> Polling -> Polling Add Hfp Object    
        - i. Name of the Tile: SevOne_Add_HFP    
        - ii. authKey: $NMSCredentials
            - 1. Body:
                - a. DeviceId: $deviceid
                - b. Frequency: $frequency
                - c. ObjectId: $objectid
                - d. pluginString: $plugin

![IBM SevOne Automated Network Observability](img/Lab%209%20-%208.png)

12.	Click on the + icon after the SevOne_Add_HFP tile statement and add ‘Assign’
    - a. Variable: $result    
    - b. $value: $SevOne_Add_HFP.result
    
13.	Delete any other tile after the one you just created (There might be another Assign tile with ‘Hello World’ that we don’t know, so please remove it)

![IBM SevOne Automated Network Observability](img/Lab%209%20-%209.png)

14.	Save workflow
16.	Go to APIs
18.	Click on Create API

    - a. Name: hfp    
    - b. Authentications
        - i. Authentication: API Keys
1. Click ‘Add API Key’
2. Name: hfpkey
            
        - ii. Copy the api key for later use
               
    - c. Click ‘Create’
    
![IBM SevOne Automated Network Observability](img/Lab%209%20-%2010.png)

    - d. In workflow deployments, click ‘Create’
        - i. Workflow -> Choose the workflow you created clicking on the folder icon on the top right side of that field
        - ii. Stage - > Click on + icon -> leave everything as it is, click Save
        
![IBM SevOne Automated Network Observability](img/Lab%209%20-%2011.png)

        - iii. Endpoint -> Click on + icon 
        
1. Change Path to /SevOneHFP  
2. Method: POST
3. Click ‘Save’
            
![IBM SevOne Automated Network Observability](img/Lab%209%20-%2012.png)

    - e. Click **Deploy**  

![IBM SevOne Automated Network Observability](img/Lab%209%20-%2013.png)

## Review

To make sure this is working as expected, we have a few ways to test it. The first thing we will do is click on the Swagger UI available on the current page. 

To test it, first we will configure the authorization by clicking on Authorize and pasting the Key that we saved before.

![IBM SevOne Automated Network Observability](img/Lab%209%20-%2014.png)

Click ‘Close’
Now we can test if this API is working, for example test the following body by clicking on Try it Out

  **deviceid**: 1,
  **objectid**: 1,
  **frequency**: 10,
  **action**: Set,
  **plugin**: ICMP

![IBM SevOne Automated Network Observability](img/Lab%209%20-%2015.png)

The outcome of this operation should be successful with a 200 code response.


![IBM SevOne Automated Network Observability](img/Lab%209%20-%2016.png)


Now if you go back to the NMS, find the device "NMS" (127.0.0.1), edit the device, go to High Frequency Poller, you should see the object IP of Device being monitored every 10 seconds.

![IBM SevOne Automated Network Observability](img/Lab%209%20-%2017.png)
