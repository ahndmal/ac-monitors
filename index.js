const URLS = [
  "https://jira.ontrq.com/status",
  "https://jira-stage.ontrq.com/status",
  "https://confluence.ontrq.com/status",
  "https://confluence-stage.ontrq.com/status",
];

fetch("https://jira.ontrq.com/status")
  .then((res) => res.json())
  .then((resp) => {
    console.log(resp);
  });
