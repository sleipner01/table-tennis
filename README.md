# Bordtennis

Et gruppeprosjekt i IT2805, hvor vi lager nettside for vår imaginære klient NTNUI Bordtennis

## Table of Contents
[[_TOC_]]


<!-- Hovedsiden kommer til å sitte her:
https://folk.ntnu.no/magnueb/bordtennis/ -->

**Documents sitter her**
 - [P1: Requirements](https://sandermg.pages.stud.idi.ntnu.no/-/bordtennis/-/jobs/320018/artifacts/public/Documents/P1_requirements_11.html)


Ressurser:
 - https://stand.ntnui.no/grupper/bordtennis/
 - https://folk.idi.ntnu.no/michailg/IT2805/exampleproject/p1_requirementsexample.html
 - [P1 oppgaven](https://learn-eu-central-1-prod-fleet01-xythos.content.blackboardcdn.com/5def77a38a2f7/11787852?X-Blackboard-Expiration=1631718000000&X-Blackboard-Signature=lT7Qrx44USUqq%2BI567duQnxmLLuCCjfwNTY2eeQwaUw%3D&X-Blackboard-Client-Id=303508&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27P1_Project_Requirements_12_09_2021.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210915T090000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=AKIAZH6WM4PL5M5HI5WH%2F20210915%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=7d24e7df776f004dc6d55baa0d2db09a17d79bfa5033ed818480e507189e22a8)
 - https://www.facebook.com/ntnuibordtennis/
 - https://ntnuicalisthenics.no
 - https://ntnui.no/cheerleading/
 - https://www.cricclubs.com/NTNUICG


<!-- Admin page for pipeline:
https://gitlab.stud.idi.ntnu.no/sandermg/bordtennis/-/jobs/320018 -->


<!-- For å sette opp pipelines fulgte jeg bare denne guiden religiøst
https://docs.gitlab.com/ee/user/project/pages/getting_started/pages_from_scratch.html -->



## Notater til P1 møtet
**Target audience**
 - Interested students          - Becoming a member
 - Existing members             - Getting information
 - Organizational committees    - Getting information

**The website will include pages that fill each of the target's needs**

 Rulebook, beginner tips, new equipment and more information when getting started, and of course a form if you want to become a member. This will fill the need for interested students and potential new members.

Existing members will easily find events, coming tournaments, practices, scoreboard, and the rulebook.

Organizational committees will find contact information, a list of coming events, requirements for holding tournaments and so on.

**More than one kind of user?**

See target audience

**Should two topics be on the same page?**

Ex: landing page that includes both coming events and become a new member form
Or rulebook for tournaments on the same page as organizational requirements

**Appearance compared to the content**

The appearance is very important, but not as important as the content, because most of the users will visit the website for information

Color scheme wise NTNUI uses green, but a combination of red, black and white would suit the table tennis sport well.

Content hierarchy wise should be similar to NTNUI's website


## File structure
```sh
bordtennis/
    ├─regular-training/
    │   └─index.html
    ├─css/
    │   └─style.css
    ├─.gitignore
    ├─intro-to-table-tennis/
    │   └─index.html
    ├─media/
    │   ├─contact-images/
    │   │   ├─istockphoto-1192307192-170667a.jpg
    │   │   ├─teamLeader.jpg
    │   │   ├─man1.jpg
    │   │   └─coach.jpg
    │   ├─intro-images/
    │   │   └─man1.jpg
    │   ├─gathering-images/
    │   │   ├─equipment.jpg
    │   │   ├─tryout.jpg
    │   │   └─tabletennis_table.jpg
    │   ├─home-images/
    │   │   ├─equipment.jpg
    │   │   ├─equipment2.jpg
    │   │   ├─tabletennis_table_cropped.jpg
    │   │   ├─man1-cropped.jpg
    │   │   ├─man1.jpg
    │   │   └─tabletennis_table.jpg
    │   ├─logo.png
    │   └─favicon.png
    ├─README.md
    ├─social-gatherings/
    │   └─index.html
    ├─index.html
    ├─js/
    │   ├─scoreboard.js
    │   ├─shared_html.js
    │   ├─homepage_gallery.js
    │   ├─training_table.js
    │   ├─hamburger_navbar.js
    │   ├─social_gatherings.js
    │   └─dark_mode.js
    ├─contact/
    │   └─index.html
    └─Documents/
        ├─PDFs/
        │   ├─social-gatherings.pdf
        │   ├─base_design.pdf
        │   ├─contact.pdf
        │   ├─Training.pdf
        │   ├─Intro.pdf
        │   ├─index-mockup.pdf
        │   └─mockups/
        │       ├─intro-mockup.png
        │       ├─training-mockup.png
        │       ├─colorScheme.png
        │       ├─generic-features.png
        │       ├─indexCalendar_concept.png
        │       ├─calendar_concept.png
        │       ├─index-mockup.png
        │       ├─social-gatherings-mockup.png
        │       └─contact-mockup.png
        ├─css/
        │   └─style.css
        ├─P3_changes_11.html
        ├─meeting_draft.html
        ├─P1_requirements_11.html
        ├─P2_design_11.html
        └─P4_testing_11.html
```
