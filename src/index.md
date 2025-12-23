---
layout: main.njk
title: No Stale Bots
---
# No More Stale Bots!

On GitHub, there has been an increasing trend of using "Staleness detector bots" that will auto-close issues that have had no activity for X amount of time.

In concept, this may sound fine, but the effects this has, and how it poisons the core principles of Open Source, have been damaging and eroding projects for a long time, often unknowingly.

![An image displaying one such interaction with stale bots; showing how, after a maintainer signals their assent for the issue's content, a stale bot reminds everyone a few months later that it will close the issue if no further activity occurs.](/example.png)

## Before Triage

Usually, issues on GitHub are triaged, which means an initial assessment of the problem is done, project areas are labelled, severity, priority, or additional concerns such as whether or not the issue was already duplicated elsewhere.

This initial triage may take a few weeks, but are often the first step in user-submitted issues, where it then comes in scope of workflows.

### How do Stale Bots fit into this?

Often, stale bots are setup without any awareness of this triage process, and so issues "slip through the cracks", where a user-submitted issue then gets ignored for 2 weeks, a month, or however long the "staleness" period lasts, gets marked as stale, and then very quickly auto-closed without any developer being aware of it.

Obviously, this is not healthy for the project, as issues can be brought up again and again, ignored every time, and cause the project to languish as users see that their complaints or issues are not heard.

----

## After Triage

The above pertains projects that have any triage process at all, but often, there's no such process, or the issues are expected to be labelled on-demand, when developers see them and sort them as "not in my wheelhouse, its in theirs".

Even in this situation, the stale bot causes massive amounts of problems, because then the definition of "a good issue" shifts from "any issue (that is reproducible and documented)" to "any issue that has a lot of activity on it."

On the developer side, issue activity can be a lot of noise, and often, exhaustion kicks in, then apathy, where the developer no longer wants to work on an issue that is being kept alive by `+1`s.

Then, even after that, when the activity dies down (understandably, as a lot of people just subscribe to the issue and wait, not having anything useful to add to the conversation), the stale bot will see the issue as "stale", due to there being no activity, and only with the active lookout by some users, these issues are then "saved" by someone bumping the thread with "not stale", and continuing to need to do so for multiple months until a developer takes a look at it, or until their patience runs out, closing and hiding the issue at hand, having achieved nothing in the end.

> *"Stalebots configured to close issues are a glorified footgun and we all know it, but what's worse, you're making everyone around you angry for firing that gun repeatedly and making everyone else spend time cleaning up after your gunshots (issues that shouldn't have been closed)."*

<span style="text-align: right; display: block"> <small> - Someone on GitHub</small>
</span>

----

## Excuses

There are quite some common excuses as to why staleness bots are used, and here are some of them, and some counterarguments.

Note that, from all arguments I've heard for stale bots so far, I have not found any of them compelling enough to warrant the *need* for auto-closing stale bots. There is value to be had in stale bots that only label and never close, as that could facilitate a dev to check on issues that can be low-hanging fruit to reap or work on, but never to auto-close them after these periods.

### "There are too many issues to work through, and the stale bot cuts the ones down that appear to have priority for users"

This is a fallacy, and conflates multiple things together in ways that do not function.

First, "user priority" is not measured in the activity on a thread. Usually, users just 👍 the issue in question, or just subscribe, and move on.

The numbers for emojis are visible, and a sufficiently advanced stale bot could make sure that since X time ago, nobody has added any emoji, but i see no bot do such a thing.

Subscriber numbers would be a similar story, but unfortunately there's no way to get the amount of subscribers for a particular issue.

However, none of that matters, as this still conflates "user priority" with "user activity". Priority is very subjective, and is also something that the maintainers need to determine about a particular issue, weighing tons of different variables together. Sometimes, developers also create internal issues that then get reaped the same by the stale bot, these do not have "user priority" nor "user activity".

As said above, even if an issue does attract interest, eventually this interest will dwindle, be it at the sight of inactivity from the devs, or because the noise has caused people to turn away, or by the simple recognition that users in the thread have already said enough about the issue at hand, and nothing more needs to be said.

Then, after these periods, the stale bot will still reap the issue, and so an issue with 800 thumbs up and 150 comments will be closed without resolution. Is this a proper way to handle Open Source Software?

### "We have too many issues, this will cut down on them"

First off, why is that necessary?

Seriously, **WHY?**

Why do you need to cut down on issue count? Is this a KPI your company has instigated? Do you know of the phrase ["When a measure becomes a target, it ceases to be a good measure."](https://en.wikipedia.org/wiki/Goodhart%27s_law)?

Even more so, what are you actually trying to achieve here? A low issue count does not mean that the project is robust and/or reliable. The rust project currently has (at the time of writing) near [9.000 open issues](https://github.com/rust-lang/rust/issues?q=is:issue+is:open+sort:updated-desc), does that mean that the project is unreliable and broken?

What's more, issues aren't processed, they are discarded, they are not regarded and/or triaged in most cases, which *is* a way your project can become unreliable and broken, as you blind your developers to potential or ongoing issues.

### "Issues can pile up because users file a lot of them, and their problems are fixed with new releases"

Really, have you checked? *Do* you check that? You do not.

What's more, this sounds like an issue with triage, where not much resources are left for user triage, deduplication, routing, and proper community management, to handle these issues in different ways.

It also normalizes the idea of not having to answer or look at potentially-problematic issues, as "They'll go away, anyway".

In this regard, labelling but not closing issues could give a dedicated person the places to look for when post-triaging issues that were filed ages ago, and routing the user to the relevant fix, giving them closure, and building community trust.

But closing issues doesn't do that, it silences their voices, and on their end, the developers never answer their question, which gives low confidence in the project overall.

### (Final Note About Project Management)

Now, I will acknowledge that triaging and managing issues is an energy-consuming job, and a mostly-thankless one, but it is an important one nonetheless. Ignoring issues is better than hiding them, as the stale bot is then essentially a cold face telling the users that you *definitely* do not care about their problems.

----

## Projects that currently use stale bots

This is a list of (large) projects that I know about, that currently use stale bots.

<small>(Please [file an issue](https://github.com/ShadowJonathan/nostalebots.xyz/issues/new) if you know of more, or if any of these have stopped using stale bots)</small>

- [Home Assistant](https://github.com/home-assistant/core/) (by the Open Home Foundation)
  {% ref "https://github.com/home-assistant/core/blob/dev/.github/workflows/stale.yml" %}

- [Home Assistant Community Addons](https://github.com/hassio-addons) (maintained by `frenck`)
  {% ref "https://github.com/hassio-addons/workflows/blob/main/.github/workflows/stale.yaml" %}

- [K3s](https://github.com/k3s-io/k3s)
  {% ref "https://github.com/k3s-io/k3s/blob/main/.github/workflows/stale.yml" %}
  <small>(exempts milestoned and triaged issues)</small>

- [Rancher](https://github.com/rancher/rancher)
  {% ref "https://github.com/rancher/rancher/blob/main/.github/workflows/stale.yml" %}
  <small>(exempts milestoned and triaged issues)</small>

- [Longhorn](https://github.com/longhorn/longhorn)
  {% ref "https://github.com/longhorn/longhorn/blob/master/.github/workflows/stale.yaml" %}
  <small>(exempts some triaged issues)</small>

- [Hugo](https://github.com/gohugoio/hugo)
  {% ref "https://github.com/gohugoio/hugo/blob/master/.github/workflows/stale.yml" %}

- [PowerDNS-Admin](https://github.com/PowerDNS-Admin/PowerDNS-Admin)
  {% ref "https://github.com/PowerDNS-Admin/PowerDNS-Admin/blob/master/.github/workflows/stale.yml" %}
  <small>(won't remove stale label on activity; 30 day counter always applies)</small>

- [Void Linux](https://github.com/void-linux)
  - [Void Packages](https://github.com/void-linux/void-packages)
    {% ref "https://github.com/void-linux/void-packages/blob/master/.github/workflows/stale.yaml" %}
    <small>(exempts assigned issues)</small>

- [Next.js](https://github.com/vercel/next.js)
  {% ref "https://github.com/vercel/next.js/blob/canary/.github/workflows/issue_stale.yml" %}

- [OpenTripPlanner](https://github.com/opentripplanner/OpenTripPlanner)
  {% ref "https://github.com/opentripplanner/OpenTripPlanner/blob/dev-2.x/.github/workflows/close_stale_pr_and_issues.yml" %}

- [Ruby on Rails](https://github.com/rails/rails)
  {% ref "https://github.com/rails/rails/blob/main/.github/workflows/stale.yml" %}
  <small>(exempts milestoned and important issues)</small>

- [Electron](https://github.com/electron/electron)
  {% ref "https://github.com/electron/electron/blob/main/.github/workflows/stale.yml" %}
  <small>(exempts triaged issues)</small>

- [Cataclysm: Dark Days Ahead](https://github.com/CleverRaven/Cataclysm-DDA)
  {% ref "https://github.com/CleverRaven/Cataclysm-DDA/blob/master/.github/workflows/stale.yml" %}
  <small>(exempts triaged, assigned, and milestoned issues)</small>

- [Homebrew Brew](https://github.com/Homebrew/brew)
  {% ref "https://github.com/Homebrew/brew/blob/main/.github/workflows/stale-issues.yml" %}

- [OwnCast](https://github.com/owncast/owncast)
  {% ref "https://github.com/owncast/owncast/blob/develop/.github/workflows/stale.yml" %}

- [Backstage](https://github.com/backstage/backstage)
  {% ref "https://github.com/backstage/backstage/blob/master/.github/workflows/automate_stale.yml" %}

- [Jellyfin](https://github.com/jellyfin/jellyfin)
  {% ref "https://github.com/jellyfin/jellyfin/blob/master/.github/workflows/issue-stale.yml" %}
  <small>(exempts triaged issues)</small>

- [Overseerr](https://github.com/sct/overseerr)
  {% ref "https://github.com/sct/overseerr/blob/develop/.github/stale.yml" %}

- [Authentik](https://github.com/goauthentik/authentik)
  {% ref "https://github.com/goauthentik/authentik/blob/main/.github/workflows/repo-stale.yml" %}

- [Docker Compose](https://github.com/docker/compose)
  {% ref "https://github.com/docker/compose/blob/main/.github/workflows/stale.yml" %}

- [Istio](https://github.com/istio)
  {% ref "https://github.com/istio/bots/blob/master/policybot/config/lifecycles/main.yaml" %}

- Some of Canonical's repos {% ref "https://github.com/search?q=org:canonical+(daysUntilClose+OR+%22days-before-close%22)&type=code" %}, including;

  - [MicroK8s](https://github.com/canonical/microk8s)
    {% ref "https://github.com/canonical/microk8s/blob/master/.github/workflows/stale-cron.yaml" %}

  - [Cloud Init](https://github.com/canonical/cloud-init)
    {% ref "https://github.com/canonical/cloud-init/blob/main/.github/workflows/stale.yml" %}

  - [Ubuntu.com](https://github.com/canonical/ubuntu.com)
    {% ref "https://github.com/canonical/ubuntu.com/blob/main/.github/stale.yml" %}

- [HAProxy Kubernetes Ingress](https://github.com/haproxytech/kubernetes-ingress)
  {% ref "https://github.com/haproxytech/kubernetes-ingress/blob/master/.github/stale.yml" %}

- [Python's `httpcore`](https://github.com/encode/httpcore)
  {% ref "https://github.com/encode/httpcore/blob/master/.github/stale.yml" %}

- [Django REST Framework](https://github.com/encode/django-rest-framework)
  {% ref "https://github.com/encode/django-rest-framework/blob/main/.github/stale.yml" %}

- Some of [The Graphite Project](https://github.com/graphite-project)'s repos {% ref "https://github.com/search?q=org:graphite-project+(daysUntilClose+OR+%22days-before-close%22)&type=code" %}

- [protobuf](https://github.com/protocolbuffers/protobuf)
  {% ref "https://github.com/protocolbuffers/protobuf/blob/main/.github/workflows/janitor.yml" %}

- [Mailcow (dockerized)](https://github.com/mailcow/mailcow-dockerized)
  {% ref "https://github.com/mailcow/mailcow-dockerized/blob/master/.github/workflows/close_old_issues_and_prs.yml" %}

- [Signal](https://githum/signalapp)
  - [Signal iOS](https://github.com/signalapp/Signal-iOS)
    {% ref "https://github.com/signalapp/Signal-iOS/blob/main/.github/workflows/stale.yml" %}

  - [Signal Android](https://github.com/signalapp/Signal-Android)
    {% ref "https://github.com/signalapp/Signal-Android/blob/main/.github/stale.yml" %}

- [fwupd](https://github.com/fwupd/fwupd)
  {% ref "https://github.com/fwupd/fwupd/blob/main/.github/stale.yml" %}
  <small>(exempts triaged issues)</small>

- [Headscale](https://github.com/juanfont/headscale)
  {% ref "https://github.com/juanfont/headscale/blob/main/.github/workflows/stale.yml" %}

- [React Native Google Mobile Ads](https://github.com/invertase/react-native-google-mobile-ads)
  {% ref "https://github.com/invertase/react-native-google-mobile-ads/blob/main/.github/workflows/stale.yml" %}

- [React Native Firebase](https://github.com/invertase/react-native-firebase)
  {% ref "https://github.com/invertase/react-native-firebase/blob/main/.github/workflows/stale.yml" %}

- [Paperless-NGX](https://github.com/paperless-ngx/paperless-ngx)
  {% ref "https://github.com/paperless-ngx/paperless-ngx/blob/dev/.github/workflows/repo-maintenance.yml" %}

----

## Counterexamples

As an example of how a project (Kubernetes) went about this same issue, and how it caused massive friction, read [this issue](https://github.com/kubernetes/kubernetes/issues/103151).

Or you can read [this blog article](https://fvsch.com/stale-bots).

For a further example, see the [Nix](https://github.com/NixOS/nix) project, which, while it still has a stale bot, it [never closes a comment or PR](https://github.com/NixOS/nixpkgs/blob/master/.github/STALE-BOT.md). See the configuration on the [main repo](https://github.com/NixOS/nix/blob/f89b84919c1a5c796512c50311821e7779b3678b/.github/stale.yml#L3) and the [packages repo](https://github.com/NixOS/nixpkgs/blob/0497a1af5751c1eb911b4bf1f2dd62736561f23d/.github/stale.yml#L3).

### "Why is not closing an issue, while still marking stale, all of the sudden okay?"

It doesn't close issues, it just tags them. This makes it possible for developers to become aware of them like "hey, it's been a while since this issue was touched, it might need an update", which can have interesting dynamics with the issue lifecycle policy that developers have then and there.

However, this dynamic is not available when the issue simply disappears, gets closed, which removes it from the lifecycle altogether.

Simply said, it gives issues a chance to survive, and to participate in the ecosystem of todo issues. How'd you like it if people stopped thinking about the riemann hypothesis because nobody has touched it in 2 weeks? Or ignore your tax returns because you took too long to respond to their inquiry? Or for a GP to disregard your request because it took too long for them to come around and answer it?

These are not exactly proper comparisons, but the emotional response they evoke certainly is, and the illogicality/"bullshittery" of it certainly looks and feels the same.
