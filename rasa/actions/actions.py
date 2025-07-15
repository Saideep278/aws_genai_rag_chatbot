# actions.py
import boto3
import json
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionCallRAGBackend(Action):
    def name(self):
        return "action_call_rag_backend"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: dict):

        latest_message = tracker.latest_message.get('text')
        print(f"[DEBUG] Latest user message: {latest_message}")

        try:
            lambda_client = boto3.client(
                'lambda',
                region_name='ap-south-1'
            )

            payload = json.dumps({"query": latest_message})
            response = lambda_client.invoke(
                FunctionName='farming-ecr',
                InvocationType='RequestResponse',
                Payload=payload.encode('utf-8')
            )

            response_payload = json.load(response['Payload'])
            print(f"[DEBUG] Raw Lambda response payload: {response_payload}")

            # Extract answer from response_payload['body']
            body = response_payload.get('body', [])
            if isinstance(body, list) and len(body) > 0:
                answer = body[0].get('text', 'No answer text')
            else:
                answer = str(body)

            dispatcher.utter_message(text=answer)

        except Exception as e:
            print(f"[ERROR] Failed to call Lambda: {e}")
            dispatcher.utter_message(text="Sorry, something went wrong while calling the backend.")

        return []

