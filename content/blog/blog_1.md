+++
title = "Blog 1 — What Is a foundation?"
description = "From definition of a category, to the foundation of mathematics."
date = 2025-12-20
slug = "what-is-a-foundation"
draft = true
+++





# Flow

- Definition of a category
    - What exactly is "data"?
    - What does "consist of" mean?
> Category theory wants to be foundation-agnostic
- What is a foundation?
    - Where do formal language, model theory, proof theory, computability theory, etc. come into the foundation landscape?
- What is meta?
- Where is ATP operating in?



# How it goes

- Foundation
    - Formal language
        - A language (syntax)
        - Why necessary?
            - To restrict: what can we talk about, in a precise fashion
    - Axioms and inference rules (proof theory)
        - A proof system
        - Why necessary?
            - To push symbols around, to deduce in a precise fashion; kill sloppy logic for good
    - Semantics and structures (model theory)
        - An interpretation story
        - Soundness and completeness (model theory)
    - Meta-theory
        - Why necessary?
            - Seal informality, break infinite regress
        - Computability (computability theory)
            - ATP
    

Now, take ZFC set theory foundation as an example.

- ZFC Foundation
    - Formal language
        - First-order language, with signature consisting of just one binary relational symbol $\in$
    - Axioms and inference rules (proof theory)
        - Axioms: ZFC, i.e.
            1. Extensionality
            2. Empty-set
            3. Pairing
            4. Union
            5. Powerset
            6. Subset
            7. Infinity
            8. Replacement
            9. Regularity
            10. Choice
        - Standard first-order inference rules
    - Semantics and structures (model theory)
        - standard
    - Soundness and completeness (model theory)
        - standard
    - Computability (computability theory)
    - ATP

### Questions (ZFC structure circularity)

Answer: meta concepts, concept overloading (object and meta)

Type theory as a second example.

- Type Theory Foundation