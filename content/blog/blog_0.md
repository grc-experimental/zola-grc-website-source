+++
title = "What is a proof?"
date = 2025-11-26
draft = false
description = "Working notes on what mathematicians mean by “proof”, and how formal systems and proof assistants fit into the picture."
+++

Mathematicians use the word *proof* in at least three different ways:

1. As a social object: something you can present on a blackboard without getting laughed out of the room.
2. As a formal object: a derivation in a fixed deductive system, ending in the statement you want.
3. As a cognitive object: the mental story you tell yourself that makes a statement feel inevitable.

In day–to–day work, we slide between these levels without announcing it. A good proof sketch in a seminar is
often enough to convince everyone that a complete version is possible, even if nobody wants to see the
fully expanded argument right then and there.

---

## Proofs as social artefacts

The first sense of “proof” is pragmatic: a proof is what convinces a suitably competent audience who
are playing by the usual rules.

Those rules are fuzzy but real:

- You are allowed to omit routine verifications.
- You are not allowed to skip the single nontrivial idea.
- You are supposed to be honest about where you are hand–waving.

Textbooks and papers live in this regime. The details that are left out are precisely the ones that “any reader
can fill in”. The point, of course, is that the set of “any readers” changes over time.

---

## Proofs as formal objects

On the other hand, we also believe that proofs *could* be written in a way that leaves nothing to the reader.
That is the formal view: fix a language, fix axioms, fix inference rules, and define a proof to be a finite
sequence of formulas each of which is either an axiom or follows from previous ones by a rule.

This level is where logicians live. It is also where proof assistants live: Lean, Coq, Isabelle, and friends
accept only proofs that are explicit enough to be checked by a small kernel.

Two quick observations:

- A formal proof is often much longer than the corresponding “paper proof”.
- The point is not to read these formal proofs like literature; the point is that they can be checked mechanically.

If the formal system is sound, then a successful check is a strong guarantee: barring hardware or software bugs,
the statement really does follow from the axioms.

---

## Proofs as mental stories

Finally, there is the inner version: a proof is the way a statement slots into your mental model of a subject.

Here you care about:

- which lemmas feel like they “ought to be true”,
- which definitions suddenly become natural after you see the theorem,
- how the argument interacts with examples already in your head.

A perfectly correct formal derivation can be a bad proof in this sense: it shows that the statement is true,
but does not tell you why it *had* to be true.

This is the level where taste and style live, and where a lot of mathematical training actually happens.

---

## Where proof assistants enter

Automated theorem proving and proof assistants sit at the border between the formal and the social:

- On one side, they require you to be explicit and precise enough for a machine.
- On the other side, a human still has to choose definitions, structure the argument, and decide what is really
  important.

One working philosophy for this site is:

> If a proof is clear enough for a seminar room, then with some effort it should be clear enough for a proof assistant.

This does *not* mean that every interesting theorem will soon have a short, pretty, fully formal proof. It means
instead that there is a continuum: from rough heuristic ideas, through blackboard proofs, through careful
write–ups, all the way to fully checked formalizations.

---

## A working answer

So, what is a proof?

- Socially: a proof is a public performance that convinces a mathematically competent audience.
- Formally: a proof is a finite derivation in a specified deductive system.
- Personally: a proof is the story that makes a statement feel inevitable in your own head.

The rest of this blog will spend a lot of time moving between these three levels, and trying to push more
of the first and third into the second—without losing what makes mathematics feel like mathematics.