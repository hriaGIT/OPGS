  window._genesys = {
    "widgets": {
      "webchat": {
        "transport": {
          "type": "purecloud-v2-sockets",
          "dataURL": "https://api.mypurecloud.com",
          "deploymentKey": "17f3a872-ce6d-4101-887c-039aa0f909d6",
          "orgGuid": "7f20556b-100a-409e-996d-7d6e740ae2cb"
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
            "placeholder": "Optional",
            "label": "First Name"
          },
          {
            "id": "cx_webchat_form_lastname",
            "name": "lastname",
            "maxlength": "100",
            "placeholder": "Optional",
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