  window._genesys = {
    "widgets": {
      "webchat": {
        "transport": {
          "type": "purecloud-v2-sockets",
          "dataURL": "https://api.mypurecloud.com",
          "deploymentKey": "ba3a1f8e-06ab-44c4-bc7b-c2f16d64d31d",
          "orgGuid": "7f20556b-100a-409e-996d-7d6e740ae2cb",
          "interactionData": {
            "routing": {
              "targetType": "QUEUE",
              "targetAddress": "MA_EN_chat",
              "priority": 2
            }
          }
        },
        "userData": {
          "addressStreet": "",
          "addressCity": "",
          "addressPostalCode": "",
          "addressState": "",
          "phoneNumber": "",
          "customField1Label": "",
          "customField1": "",
          "customField2Label": "",
          "customField2": "",
          "customField3Label": "",
          "customField3": ""
        }
      }
    }
  };

  function getAdvancedConfig() {
    return {
      "form": {
        "autoSubmit": false,
        "firstname": "",
        "lastname": "",
        "email": "",
        "subject": ""
      },
      "formJSON": {
        "wrapper": "<table></table>",
        "inputs": [
          {
            "id": "cx_webchat_form_firstname",
            "name": "firstname",
            "maxlength": "100",
            "placeholder": "Required",
            "label": "First Name"
          },
          {
            "id": "cx_webchat_form_lastname",
            "name": "lastname",
            "maxlength": "100",
            "placeholder": "Required",
            "label": "Last Name"
          },
          {
            "id": "cx_webchat_form_email",
            "name": "email",
            "maxlength": "100",
            "placeholder": "Optional",
            "label": "Email"
          },
          {
            "id": "cx_webchat_form_subject",
            "name": "subject",
            "maxlength": "100",
            "placeholder": "Optional",
            "label": "Subject"
          }
        ]
      }
    };
  }

  const customPlugin = CXBus.registerPlugin('Custom');