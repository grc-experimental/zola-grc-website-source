+++
title = "Blog 1 — What is a Foundation?"
description = "Foundations, infinite regression, category theory, and their necessities"
date = 2026-01-11
slug = "blog1"
draft = false
+++







## I. Informality in Category Theory

We begin with the definition of a category (excerpt from Steve Awodey, Category Theory 2nd ed., Definition 1.1)

> A **category** consists of the following data:
> - Objects: $A,B,C,\dots$
> - Arrows: $f,g,h,\dots$
> - For each arrow $f$, there are given objects $$dom(f), \quad cod(f)$$ called the *domain* and *codomain* of $f$. We write $$f:A \to B$$ to indicate that $A = dom(f)$ and $B = cod(f)$
> - Given arrows $f:A \to B$ and $g:B \to C$, that is, with $$cod(f) = dom(g)$$ there is given an arrow $$g \circ f : A \to C$$ called the *composite* of $f$ and $g$.
> - For each object $A$, there is given an arrow $$1_A : A \to A$$ called the *identity arrow* of $A$.
>
> These data are required to satisfy the following laws:
> - Associativity: $$h \circ (g \circ f) = (h \circ g) \circ f$$ for all $f : A \to B, g : B \to C, h : C \to D$
> - Unit: $$f \circ 1_A = f = 1_B \circ f$$ for all $f : A \to B$.

All those in room nod, until the harmony is broached by a question:
> What is "data"?

Indeed, what is it? A set, a proper class? If one read on for a few more pages in the book, one knows, from examples presumably, that a category can be in the form of a set or a proper class, it depends. This begs a follow-up: 
> Then why don't we define category as a class? Why use the vague term "data"?

Similar inquiries on terminologies can be made (three shown):
1. What is "consist of"?
2. What is "objects"?
3. What is "arrows"?

This is not pedantry. These words are doing work. They are the hinges on which the entire definition turns.

To say that a category “consists of data” already presupposes a notion of collection.  
To say “for each arrow f there are given objects dom(f), cod(f)” presupposes an assignment.  
To say “there is given an arrow g ∘ f” presupposes an operation.  
To write equations such as
$$
h \circ (g \circ f) = (h \circ g) \circ f
$$
presupposes a notion of equality.

None of these notions is introduced by the definition. They are *used* by it.

One might expect that set theory will eventually supply the missing meanings. But the dependence appears earlier than that. The definition already relies on a background in which collections, assignments, operations, and equalities are legitimate objects of discourse. Set theory, if it enters at all, enters only after this background has been assumed.

At this point it is tempting to accuse the definition of imprecision. That temptation should be resisted.

The vagueness is not accidental. Category theory is written this way because it is meant to survive translation across foundations. If the definition insisted that objects and arrows be *sets*, or that collections be *classes*, or that composition be a *set-theoretic function*, it would immediately bind the theory to a particular foundational framework. Instead, the definition is deliberately phrased in terms—“data,” “given,” “assignment,” “operation”—that can be instantiated in multiple settings.

This is what it means for category theory to be foundation-agnostic. The theory does not deny the need for a foundation; it postpones the choice. The cost of that postponement is precisely the informality we have just observed. The definition relies on a background it does not name, because naming it would forfeit its generality.

Nothing breaks. Category theory flourishes. Mathematics proceeds.

But it proceeds by leaning—quietly and systematically—on a layer it does not control.

This is where regress begins.







## II. What a Foundation Actually Is

- Introduce the notion of a *foundation* explicitly.
- Describe its components:
  - a formal language,
  - a proof system (axioms and inference rules),
  - an interpretation or semantics,
  - a meta-theory.
- Emphasize:
  - a foundation is not ultimate bedrock,
  - it is a **designed stopping point**.
- Stress that foundations organize mathematics; they do not justify reasoning from nothing.



## III. Meta-Theory and Disciplined Informal Deduction

- Clarify what “informal” means:
  - finite reasoning,
  - explicit constructions,
  - induction on syntax and proofs.
- Explain why syntax, proofs, and models are reasoned about meta-theoretically.
- Briefly mention results of Gödel, Tarski, and Löwenheim–Skolem as boundary markers.
- Emphasize:
  - the meta-level is unavoidable,
  - it is stable and shared,
  - it is not a flaw.

---

## IV. Semantics as External Dependence

- Explain what a structure or model is.
- Describe how semantics assigns meaning externally to formal systems.
- Argue that:
  - no sufficiently strong foundation can fully supply its own semantics,
  - this is an instance of **external dependence**, not a defect.
- Use set theory (ZFC) as the guiding example.
- Emphasize that semantics stabilizes mathematics *relative* to a background, not absolutely.

---

## V. Internalization: How Far Can Foundations Push Downward?

- Explain the idea of internalization.
- Show what can be internalized:
  - syntax (Gödel coding),
  - proofs,
  - limited semantic notions.
- Explain what cannot be fully internalized:
  - global truth,
  - full correctness of the system itself.
- Frame internalization both as:
  - a technical maneuver,
  - a foundational design philosophy.
- Emphasize that internalization compresses, but never eliminates, meta-theory.

---

## VI. Category Theory as a Bridge Between Foundations

- Explain why category theory often feels “meta-theoretic.”
- Clarify that:
  - category theory is foundation-agnostic,
  - but not foundation-free.
- Discuss categories such as:
  - the category of groups,
  - the category of vector spaces,
  and how they live inside a background foundation (typically ZFC).
- Present category theory as:
  - a language of invariants,
  - a bridge allowing mathematics to survive translation between foundations.
- Emphasize discipline over mysticism.

---

## VII. Where We Stop — On Purpose

- Return to the original discomfort.
- State plainly:
  - infinite regress is real,
  - stopping is forced,
  - discipline replaces absolutes.
- Emphasize that:
  - mathematics works because this stopping point is managed well,
  - not because it is eliminated.
- End calmly, with coherence rather than triumph.
