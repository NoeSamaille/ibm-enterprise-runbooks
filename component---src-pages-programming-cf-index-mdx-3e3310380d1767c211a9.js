(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{W7y3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n,i=a("k1TG"),s=a("8o2o"),c=(a("q1tI"),a("7ljp")),r=a("013z"),o=(a("T0C+"),a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),l={_frontmatter:o},p=r.a;function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)(p,Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b,{mdxType:"PageDescription"},Object(c.b)("p",null,"Simple tutorial for reading IBM Event Streams (using Kafka) messages with IBM\nCloud Functions Python runtime."),Object(c.b)("h2",null,"Prerequisites"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://cloud.ibm.com"}),"IBM Cloud")," account."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cli-getting-started"}),"IBM Cloud CLI"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://cloud.ibm.com/functions/learn/cli"}),"IBM Cloud Functions CLI"),"."),Object(c.b)("li",{parentName:"ul"},"Cloud Foundry Organization (in this tutorial, I’ll use ",Object(c.b)("inlineCode",{parentName:"li"},"noe.samaille"),")."),Object(c.b)("li",{parentName:"ul"},"Cloud Foundry Space (in this tutorial, I’ll use is ",Object(c.b)("inlineCode",{parentName:"li"},"test"),").")),Object(c.b)("h2",null,"Log in to IBM Cloud using CLI"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Log in locally to your IBM Cloud account using the CLI:",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),"ibmcloud login\n"))),Object(c.b)("li",{parentName:"ul"},"Select your region (in this example I’ll create resources in the ",Object(c.b)("inlineCode",{parentName:"li"},"us-south")," region):",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),"ibmcloud target -r us-south\n"))),Object(c.b)("li",{parentName:"ul"},"Select your resource group (in this example I’ll use ",Object(c.b)("inlineCode",{parentName:"li"},"default"),"):",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),"ibmcloud target -g default\n"))),Object(c.b)("li",{parentName:"ul"},"Select your Cloud Foundry org and space (in this example I’ll use ",Object(c.b)("inlineCode",{parentName:"li"},"noe.samaille")," org and ",Object(c.b)("inlineCode",{parentName:"li"},"test")," space):",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),"ibmcloud target --cf\n")))),Object(c.b)("h2",null,"Create you action"),Object(c.b)("p",null,"Create an ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/functions/actions"}),"IBM Cloud Functions Action")," called ",Object(c.b)("inlineCode",{parentName:"p"},"process-message"),", that uses the ",Object(c.b)("strong",{parentName:"p"},"Python")," runtime:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8klEQVQY03VQzWqDQBj0KTyqiDdRpGBQ6l/10kdrHqMXwTfIG+TSV8iph4IF8Sf7k01lurs0IYVkYRi+j51h5jNs24bnebAsC6ZpIgxDZFmGNE01F0WBqqqQ57nmuq41N00j+UXvL7uyLGHEcYwgCOD7PpR527ZQb5omzPOMYRgwjqNmNTPG7oIyjuORSMPNBkmSIIoiuK6rDZWw73twzv+LKL2CEPLHFIJT4ExxPlEYZfMqqz1rU5Wy6zqs66oTKdEtbg0vZpxRfH4TfBwIDl8yobqVupuq7TjOtfKyLDqhEOIhGBfyp8D7XuDp7Qfb3Qm/dRIryhK7ZRUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"fn-action",title:"fn-action",src:"/ibm-enterprise-runbooks/static/c3a65033926afdffce360b9fe2d352cb/3cbba/fn-action.png",srcSet:["/ibm-enterprise-runbooks/static/c3a65033926afdffce360b9fe2d352cb/7fc1e/fn-action.png 288w","/ibm-enterprise-runbooks/static/c3a65033926afdffce360b9fe2d352cb/a5df1/fn-action.png 576w","/ibm-enterprise-runbooks/static/c3a65033926afdffce360b9fe2d352cb/3cbba/fn-action.png 1152w","/ibm-enterprise-runbooks/static/c3a65033926afdffce360b9fe2d352cb/f8f7e/fn-action.png 1174w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"Click ",Object(c.b)("strong",{parentName:"p"},"Create")," and put this sample code inside:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"def main(dict):\n    messages = dict.get('messages')\n\n    if messages is None or messages[0] is None:\n        return { 'error': \"Invalid arguments. Must include 'messages' JSON array\" }\n    try:\n        val = messages[0]['value']\n    except KeyError:\n        return { 'error': \"Invalid arguments. Must include 'messages' JSON array\" }\n\n    for i in range(0, len(messages)):\n        msg = messages[i]\n        print('Message received:', msg['value'])\n\n    return { 'messages': messages }\n")),Object(c.b)("h2",null,"Provision IBM Event Streams"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Provision an ",Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://cloud.ibm.com/catalog/services/event-streams"}),"IBM Event Streams")," instance. In this tutorial I’ll call IBM Event Streams service instance ",Object(c.b)("inlineCode",{parentName:"li"},"my-event-streams"),":")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACzElEQVQ4y4VU20obURSdLyilL1Ki0YeGXJtBm4rBt0KhPrVRaokQ8R/6J8amD5H+Q99LP8IHQcyDIcbc555xxiirZ514BiM2HljMmeTM2mvvdfbWdnZ28K28h89fSiiVSjg4OIhQqVSwv7+PcrmM7e3tCLu7uygWi1hZWcHi4iKWl5cRj8extLQE7e4OGBoOOv0hLNPEc+v29lY+6/U68vk8CoUC0uk0crkcdF2HFoQT9IYWBoaNbm+A4XAE07IRhsFcwuPjY6ytrWFzc1MSk5DQHMeRJI7rwbJtsR9iNBLv4vcgCHB9fT0Dz/MkYa1Wk8qY+urqKrLZLDKZDDTLstDv9WALMhIo+L4vP34MnuOqVquIxWJSFYlJRlJtPB7DdV1JEIZhBEXq+2P4Yw88R1A519HRkTSB6ZIoUmgKI7rdLnpCJfcKVE6YlgPDFkEfKXyKUCqkOoKRldKH8PwAhhMgvLnBZDKRyucSUg3VdTodNJtNtNttXF5eotVq4erqCiNhUrvdQr/fx2AwkNkw8OHh4dOEdJVEjUYDJycnMzg9PcXZ2RnOz8/lmYuLC3mOImjKk4SsCaMTVKZAhVRtGIZUxiwYnHum/t+UWZM70S50lh8rU5iWunOsr7qXPDu3hrysN6LgNICuPrxG/I8EJFYBGPhZQrYTDzMt5ThLQVIuGkGzmMGzhOrAvMVWZAAGZ/3mEqoOUS3HoSARvYcz7ahUTwnjglBHhl1yD+nydCDQEEt2xPSyszNmL/1sp1QRjy1AzyWRSyeQS71BNpOENjBdNDsGuiMXhhtGGDmhmD6C7L6WSm2k8EcNrxPvkVrfQuLdRyQKn5DSi0Kh48G0PTjetM3GEqHcT9U6UhnrR0I+5bT5+QsvtupYqPzBq6+/8XLvL+Ifvk+njZwo8po8mDhCEf9TY4t7kimFnIfJZBIbG+vQ828FxMQWBv0Dd+bopx8q4qgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"es-provision",title:"es-provision",src:"/ibm-enterprise-runbooks/static/f5e554ceaf46e07ca1ef64fd7102ac9a/3cbba/es-provision.png",srcSet:["/ibm-enterprise-runbooks/static/f5e554ceaf46e07ca1ef64fd7102ac9a/7fc1e/es-provision.png 288w","/ibm-enterprise-runbooks/static/f5e554ceaf46e07ca1ef64fd7102ac9a/a5df1/es-provision.png 576w","/ibm-enterprise-runbooks/static/f5e554ceaf46e07ca1ef64fd7102ac9a/3cbba/es-provision.png 1152w","/ibm-enterprise-runbooks/static/f5e554ceaf46e07ca1ef64fd7102ac9a/eb0e7/es-provision.png 1314w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a topic called ",Object(c.b)("inlineCode",{parentName:"li"},"hello-world"),":")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVQY04WRTU7DMBCFc2y2nIM1KzYcAgmJG1RICFCT1HH8/xc3Th5jl25YUEuf/DwejWeeu1k5MC6hlILUClwJKHk5e+//xToPoT2YvOzKeHTeGRgtESghBCIGpJSwLAtyzjdJS4aLGT4RMaE7fAz4PDL0TIEJS0UDhBCoa9/3m1DWL8C6ntF99Rzf/YSRa0zSUWeZLlaUUrBtW+OvbpAGCt5ZwcNLweNbwaxTHdmikmJsaK1bh9ZacM4xTROMMRjHEafTqWlJHh/7AVbNeD1o3D1p3D9rDDN5WEes+OZhgHOufUik4lfza7w+VHWNX3M8xbdzpE4r5D35/wNu88yCjjYFhAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"es-topic",title:"es-topic",src:"/ibm-enterprise-runbooks/static/3e1059b4fed11e5c328e27be855777a6/3cbba/es-topic.png",srcSet:["/ibm-enterprise-runbooks/static/3e1059b4fed11e5c328e27be855777a6/7fc1e/es-topic.png 288w","/ibm-enterprise-runbooks/static/3e1059b4fed11e5c328e27be855777a6/a5df1/es-topic.png 576w","/ibm-enterprise-runbooks/static/3e1059b4fed11e5c328e27be855777a6/3cbba/es-topic.png 1152w","/ibm-enterprise-runbooks/static/3e1059b4fed11e5c328e27be855777a6/ce6f1/es-topic.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create service credentials called ",Object(c.b)("inlineCode",{parentName:"li"},"cloud-function"),":")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQY022QS27DMAxEfcMeoofqpqtepVdINkGAIrZj62fJ1seujKBTUkKCAO3iYURSIodqjPMQ2sJZCzs7mMVimRcs3iOl9IcYYyGliBAT7JKgXFXnExq/zHDOIoRAFwKU0RjHAUKImnuiNkqPhqw+RBqeSCuN0gbaTMURT1RKob1KjFLDaMJQndQ596/jdeUBFY6bw3nE8XTBuaVGYi7O2q7HdRhKcyllUc4z95wgrKE3MuD1I+PlLeP9c6OVyZn3gbqvZQV21LYX9H1fzsw0TSXuuq64feRN3e7UWRy/DHo5o3n+bNZt2wp8zjlj3/fCPcfKMddKnfi5Zdzyiu8t4Re0usZUxekHOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"fn-action",title:"fn-action",src:"/ibm-enterprise-runbooks/static/533d410efdd432dbc7af4af86048fc0f/3cbba/es-creds.png",srcSet:["/ibm-enterprise-runbooks/static/533d410efdd432dbc7af4af86048fc0f/7fc1e/es-creds.png 288w","/ibm-enterprise-runbooks/static/533d410efdd432dbc7af4af86048fc0f/a5df1/es-creds.png 576w","/ibm-enterprise-runbooks/static/533d410efdd432dbc7af4af86048fc0f/3cbba/es-creds.png 1152w","/ibm-enterprise-runbooks/static/533d410efdd432dbc7af4af86048fc0f/ce6f1/es-creds.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h2",null,"Binding the ",Object(c.b)("inlineCode",{parentName:"h2"},"/whisk.system/messaging")," package to your Event Streams instance"),Object(c.b)("p",null,"More information in the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-pkg_event_streams#event_streams_binding"}),"documentation"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a ",Object(c.b)("inlineCode",{parentName:"li"},"/whisk.system/messaging")," package binding that is configured for your Event Streams account. In this example, the package name is ",Object(c.b)("inlineCode",{parentName:"li"},"MyEventStreamBind"),".",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn package bind /whisk.system/messaging MyEventStreamBind\n"))),Object(c.b)("li",{parentName:"ul"},"Verify that the package binding exists.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn package list\n"))),Object(c.b)("li",{parentName:"ul"},"Get the name of the service instance that you want to bind to an action or package.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud resource service-instances\n"))),Object(c.b)("li",{parentName:"ul"},"Get the name of the credentials that are defined for the service instance you got in the previous step.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud resource service-keys --instance-name my-event-streams\n"))),Object(c.b)("li",{parentName:"ul"},"Bind the service to the package that you created in the first step. In the example, this package is called ",Object(c.b)("inlineCode",{parentName:"li"},"MyEventStreamBind"),".",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn service bind messagehub MyEventStreamBind --instance my-event-streams --keyname cloud-functions\n"))),Object(c.b)("li",{parentName:"ul"},"Verify that the credentials are successfully bound.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn package get MyEventStreamBind parameters\n"))),Object(c.b)("li",{parentName:"ul"},"Create a trigger that is fired when new messages are posted to your Event Streams topic.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn trigger create MyMessageHubTrigger -f /noe.samaille_test/MyEventStreamBind/MyEventStreamBind/messageHubFeed -p topic hello-world\n"))),Object(c.b)("li",{parentName:"ul"},"Create a trigger that is fired when new messages are posted to your Event Streams topic.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn trigger create MyMessageHubTrigger -f /noe.samaille_test/MyEventStreamBind/MyEventStreamBind/messageHubFeed -p topic hello-world\n")))),Object(c.b)("h2",null,"Connect your action to the trigger"),Object(c.b)("p",null,"On ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/functions/triggers"}),"IBM Cloud Functions Triggers"),", click your newly created trigger ",Object(c.b)("inlineCode",{parentName:"p"},"MyMessageHubTrigger"),", then in ",Object(c.b)("strong",{parentName:"p"},"Connected Actions")," click ",Object(c.b)("strong",{parentName:"p"},"Add")," and select your existing ",Object(c.b)("inlineCode",{parentName:"p"},"process-message")," action."),Object(c.b)("h2",null,"Test it out"),Object(c.b)("p",null,"Now let’s try that our action is triggered by a new message on topic ",Object(c.b)("inlineCode",{parentName:"p"},"hello-world"),". Open 2 separate terminals for the next steps."),Object(c.b)("p",null,"On ",Object(c.b)("strong",{parentName:"p"},"terminal 1"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"ibmcloud fn activation poll\n")),Object(c.b)("p",null,"On ",Object(c.b)("strong",{parentName:"p"},"terminal 2"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clone event streams sample python client:",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/ibm-messaging/event-streams-samples\ncd event-streams-samples/kafka-python-console-sample\n"))),Object(c.b)("li",{parentName:"ul"},"In ",Object(c.b)("inlineCode",{parentName:"li"},"event-streams-samples/kafka-python-console-sample/app.py"),", replace:",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"self.topic_name = 'kafka-python-console-sample-topic'\n")),"  With:",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"self.topic_name = 'hello-world'\n"))),Object(c.b)("li",{parentName:"ul"},"Run producer (check ",Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-python-console-sample/docs/Local.md"}),"how to set up environment config"),"):",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"export KAFKA_BROKERS=<KAFKA_BROKERS>\nexport KAFKA_ADMIN_URL=<KAFKA_ADMIN_URL>\nexport KAFKA_APIKEY=<KAFKA_APIKEY>\npython3 app.py $KAFKA_BROKERS $KAFKA_ADMIN_URL $KAFKA_APIKEY ../../certs.pem -producer\n")))),Object(c.b)("p",null,"You should now see the activations logged on ",Object(c.b)("strong",{parentName:"p"},"terminal 1")," window:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'❯ ibmcloud fn activation poll\nEnter Ctrl-c to exit.\nPolling for activation logs\n... output ommited ...\nActivation: \'process-message\' (bd0424b7a8a74a538424b7a8a74a530d)\n[\n    "2021-04-13T14:55:27.155459Z    stdout: Message received: This is a test message #0",\n    "2021-04-13T14:55:27.155506Z    stdout: Message received: This is a test message #1",\n    "2021-04-13T14:55:27.155511Z    stdout: Message received: This is a test message #2"\n]\n... output ommited ...\nActivation: \'process-message\' (e1e3c7533d70405ba3c7533d70b05b95)\n[\n    "2021-04-13T14:55:31.063744Z    stdout: Message received: This is a test message #4"\n]\n... output ommited ...\nActivation: \'process-message\' (76e9ac7d375e49c7a9ac7d375e69c729)\n[\n    "2021-04-13T14:55:33.050174Z    stdout: Message received: This is a test message #5"\n]\n... output ommited ...\n'))),Object(c.b)("h2",null,Object(c.b)("strong",{parentName:"h2"},"Overview")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-programming-cf-index-mdx-3e3310380d1767c211a9.js.map