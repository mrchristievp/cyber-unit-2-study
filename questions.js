/* Original practice bank. All options reviewed for parallel wording and plausible misconceptions. */
const TOPICS = [
  {
    "id": "social",
    "name": "People & persuasion",
    "sub": "Recognize tactics. Verify independently.",
    "icon": "◎",
    "color": "#d8efe5"
  },
  {
    "id": "attack",
    "name": "Adversaries & attack activities",
    "sub": "Connect actions to motives and objectives.",
    "icon": "↗",
    "color": "#e1e9fa"
  },
  {
    "id": "risk",
    "name": "Understanding risk",
    "sub": "Separate likelihood, impact, and exposure.",
    "icon": "◇",
    "color": "#f7ead6"
  },
  {
    "id": "response",
    "name": "Responding to risk",
    "sub": "Choose a response. Account for what remains.",
    "icon": "⇄",
    "color": "#ebe2f5"
  },
  {
    "id": "control",
    "name": "Controls & layered defenses",
    "sub": "Explain how a defense works and why.",
    "icon": "▤",
    "color": "#deedf0"
  },
  {
    "id": "evidence",
    "name": "CIA & evidence",
    "sub": "Protect information. Support your conclusions.",
    "icon": "⌕",
    "color": "#f4e1dd"
  }
];
const QUESTIONS = [
  {
    "id": "social-1",
    "topic": "social",
    "prompt": "A message apparently from a club president asks you to buy gift cards for an unexpected fundraiser. What is the strongest way to check the request?",
    "options": [
      "Call the club president using a number saved before this message.",
      "Reply and ask the sender to confirm the purchase.",
      "Compare the signature with an earlier genuine message.",
      "Call the contact number supplied in the message."
    ],
    "answer": [
      0
    ],
    "explanation": "A previously saved number checks the request through an independent route. Replies and supplied numbers may reach the attacker; a copied signature does not authenticate a request.",
    "trap": "Choose a verification route independent of the suspicious message."
  },
  {
    "id": "social-2",
    "topic": "social",
    "prompt": "A pop-up says your photo collection will be erased unless you install a repair tool immediately. Which influence tactic does the short deadline emphasize?",
    "options": [
      "Urgency",
      "Scarcity",
      "Intimidation",
      "Authority"
    ],
    "answer": [
      0
    ],
    "explanation": "The deadline emphasizes urgency: pressure to act before checking. The threat of deletion adds intimidation, but the question specifically asks what the short deadline contributes.",
    "trap": "Distinguish pressure from limited time, threatened consequences, and claimed authority."
  },
  {
    "id": "social-3",
    "topic": "social",
    "prompt": "A stranger offers free concert access after you fill in a form with your school login. What is the safest response?",
    "options": [
      "Check the promotion with its official organizer before entering credentials.",
      "Check the form’s HTTPS connection before entering school credentials.",
      "Check the sender’s profile history before entering school credentials.",
      "Check the form’s privacy statement before entering school credentials."
    ],
    "answer": [
      0
    ],
    "explanation": "Verifying the promotion through the real organizer addresses whether the request is legitimate. HTTPS, profile history, and a privacy statement can appear on an attacker’s form or account.",
    "trap": "Connection security and convincing presentation do not establish authorization to collect your password."
  },
  {
    "id": "social-4",
    "topic": "social",
    "prompt": "A caller poses as an auditor and invents a compliance inspection to obtain donor records. Which feature makes this pretexting?",
    "options": [
      "A fabricated inspection gives the request a credible cover story.",
      "A claimed position makes the caller seem entitled to obedience.",
      "A threatened penalty makes refusing the request seem personally risky.",
      "A limited response window pressures the recipient to act quickly."
    ],
    "answer": [
      0
    ],
    "explanation": "The invented inspection is the pretext: a false situation used to justify the request. Authority is related to the auditor role, but the fabricated scenario distinguishes pretexting. The stem does not describe a penalty or a deadline.",
    "trap": "A tactic can overlap with authority while still being defined by its invented story."
  },
  {
    "id": "social-5",
    "topic": "social",
    "prompt": "A message says, “Every other team has already installed our browser extension.” Which tactic is most directly used?",
    "options": [
      "Consensus",
      "Familiarity",
      "Authority",
      "Reciprocity"
    ],
    "answer": [
      0
    ],
    "explanation": "The claim that other teams already complied is an appeal to group behavior. It does not offer a favor, invoke a superior, or demonstrate a personal relationship.",
    "trap": "Popularity is the deciding clue, rather than the identity of the sender."
  },
  {
    "id": "social-6",
    "topic": "social",
    "prompt": "An online offer says only two discounted licenses remain. Which tactic does the limited supply emphasize?",
    "options": [
      "Scarcity",
      "Urgency",
      "Consensus",
      "Reciprocity"
    ],
    "answer": [
      0
    ],
    "explanation": "Only two licenses remain describes limited quantity: scarcity. Urgency emphasizes a time limit; consensus invokes other people’s behavior; reciprocity invokes an obligation to return a favor.",
    "trap": "A quantity limit and a deadline can create similar pressure through different mechanisms."
  },
  {
    "id": "social-7",
    "topic": "social",
    "prompt": "An unexpected message uses the nickname of your robotics team and mentions your recent competition. What should you conclude?",
    "options": [
      "The sender knows team details; their identity still needs verification.",
      "The sender’s team knowledge is enough to establish team membership.",
      "The competition reference establishes access to the team’s private records.",
      "The personalized wording establishes that a human wrote the message."
    ],
    "answer": [
      0
    ],
    "explanation": "Public posts or copied messages can supply team details. Those details alone do not establish membership, access to private records, or whether the message was written by a human.",
    "trap": "A conclusion must follow from the detail, not merely sound consistent with it."
  },
  {
    "id": "social-8",
    "topic": "social",
    "prompt": "A person claiming to be a senior executive threatens a volunteer with removal unless they bypass a records policy. Select TWO appropriate actions.",
    "options": [
      "Follow the records policy while checking the executive’s claim.",
      "Verify the request through an independently known organizational contact.",
      "Approve a limited exception while awaiting confirmation from management.",
      "Confirm the request by calling the number in the message."
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Keeping the policy in place prevents unauthorized disclosure while an independent contact checks the claim. A limited exception still bypasses authorization, and a number in the message may lead back to the attacker.",
    "trap": "Apparent seniority does not justify either a temporary disclosure or a dependent verification route."
  },
  {
    "id": "social-9",
    "topic": "social",
    "prompt": "A visitor uses a phone’s zoom lens to capture a staff member entering a private code at a checkout terminal. Which attack is illustrated?",
    "options": [
      "Shoulder surfing",
      "Pretexting",
      "Credential stuffing",
      "Badge cloning"
    ],
    "answer": [
      0
    ],
    "explanation": "Recording a code as it is entered is shoulder surfing, even when a camera provides the view. Credential stuffing tests previously obtained credentials; pretexting uses a cover story; badge cloning copies a credential token.",
    "trap": "Classify the method used to obtain the code, not what the attacker might do with it later."
  },
  {
    "id": "social-10",
    "topic": "social",
    "prompt": "An attacker finds an outdated employee contact sheet in discarded recycling and uses it to target convincing messages. How was the information collected?",
    "options": [
      "Dumpster diving",
      "Open-source research",
      "Shoulder surfing",
      "Pretexting"
    ],
    "answer": [
      0
    ],
    "explanation": "The information comes from discarded material, making this dumpster diving. Open-source research uses publicly available sources; shoulder surfing observes information in use; pretexting uses deception to persuade someone.",
    "trap": "The immediate source of the information distinguishes the collection method."
  },
  {
    "id": "attack-1",
    "topic": "attack",
    "prompt": "A group disrupts a retailer’s online store and publishes a statement protesting its labor policies. Which motive is best supported?",
    "options": [
      "Promoting the group’s political or social cause",
      "Earning payment through service disruption",
      "Gaining status through a technical challenge",
      "Supporting a competitor through commercial sabotage"
    ],
    "answer": [
      0
    ],
    "explanation": "The protest statement directly supports a cause-driven motive, consistent with hacktivism. Payment, reputation among peers, and a competitor’s interests are possible motives for other attacks, but no supporting evidence is supplied here.",
    "trap": "An attack’s effects can fit several motives; use the evidence that identifies the stated purpose."
  },
  {
    "id": "attack-2",
    "topic": "attack",
    "prompt": "A contractor with approved access secretly sells the client’s internal product designs. Which description best fits?",
    "options": [
      "A malicious insider deliberately misusing their legitimate access",
      "An external attacker exploiting stolen credentials",
      "A careless insider unintentionally exposing data",
      "An authorized researcher testing disclosure controls"
    ],
    "answer": [
      0
    ],
    "explanation": "The contractor has legitimate access and intentionally sells confidential designs. That supports malicious insider activity, rather than stolen external access, an accident, or an authorized test.",
    "trap": "Contractor status does not rule out an insider; authorization to access is not authorization to sell."
  },
  {
    "id": "attack-3",
    "topic": "attack",
    "prompt": "Before contacting a target, an attacker studies staff biographies and public conference presentations. Which activity is this?",
    "options": [
      "Reconnaissance",
      "Initial access",
      "Lateral movement",
      "Defense evasion"
    ],
    "answer": [
      0
    ],
    "explanation": "Studying biographies and presentations gathers information about the target. The described action neither enters a system, moves between systems, nor conceals a compromise.",
    "trap": "Gathering target information is not evidence that access has already occurred."
  },
  {
    "id": "attack-4",
    "topic": "attack",
    "prompt": "An attacker tricks a user into approving a malicious application, allowing the attacker into an account for the first time. Which activity is represented?",
    "options": [
      "Initial access",
      "Privilege escalation",
      "Lateral movement",
      "Persistence"
    ],
    "answer": [
      0
    ],
    "explanation": "The application approval provides entry to the account for the first time. Escalation increases existing privileges, lateral movement reaches another internal resource, and persistence preserves access.",
    "trap": "Identify the change in access that actually occurs in the scenario."
  },
  {
    "id": "attack-5",
    "topic": "attack",
    "prompt": "After taking over an online account, an attacker adds a second recovery method under their control. What is the main objective?",
    "options": [
      "Preserve a way back after the original access is removed.",
      "Increase the account’s permissions to an administrator level.",
      "Expand access from the account into another internal system.",
      "Reduce monitoring of the account’s existing sign-in activity."
    ],
    "answer": [
      0
    ],
    "explanation": "An attacker-controlled recovery method supports persistence by providing a way back in. Its addition does not itself establish higher privileges, access to another system, or reduced monitoring.",
    "trap": "Do not substitute escalation, movement, or evasion for the goal of retaining access."
  },
  {
    "id": "attack-6",
    "topic": "attack",
    "prompt": "An attacker compromises a design workstation and then accesses a separate internal repository using credentials found there. What activity is most directly shown?",
    "options": [
      "Lateral movement",
      "Privilege escalation",
      "Credential collection",
      "Persistence"
    ],
    "answer": [
      0
    ],
    "explanation": "The attacker uses one compromised resource to reach a separate internal repository. Credentials enable the move, but the action emphasized is movement to another resource, not merely collecting credentials or retaining the first foothold.",
    "trap": "The destination of the access distinguishes movement from collecting a tool that enables it."
  },
  {
    "id": "attack-7",
    "topic": "attack",
    "prompt": "An intruder renames a malicious process to resemble ordinary software and disables its alerts. What objective do these actions support?",
    "options": [
      "Concealing activity from defenders",
      "Increasing permissions on the system",
      "Preserving access across system restarts",
      "Reaching additional systems inside the network"
    ],
    "answer": [
      0
    ],
    "explanation": "Disguising a process and disabling its alerts support defense evasion. Those actions do not by themselves establish privilege escalation, restart persistence, or movement to other systems.",
    "trap": "An action may help an attack continue without being a persistence mechanism."
  },
  {
    "id": "attack-8",
    "topic": "attack",
    "prompt": "An extortion group encrypts business files and demands payment for recovery. Which motive is most directly supported?",
    "options": [
      "Financial gain",
      "Political influence",
      "Personal retaliation",
      "Competitive advantage"
    ],
    "answer": [
      0
    ],
    "explanation": "The demand for payment directly supports a financial motive. Encryption could also cause effects useful for retaliation or competition, but those motives are not established by the stem.",
    "trap": "Prefer the motive supported by the demand over a motive inferred from the harm."
  },
  {
    "id": "attack-9",
    "topic": "attack",
    "prompt": "Logs show a malicious sign-in and later an export of confidential designs. Select TWO supported statements.",
    "options": [
      "The attacker successfully gained initial access to an organizational account.",
      "The later export represents an action involving confidential organizational information.",
      "The attacker established a method for returning after access removal.",
      "The later export demonstrates movement to a separate internal system."
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "The malicious sign-in establishes account access, and the export establishes an action involving information. Neither event alone demonstrates a return mechanism or a move to a separate system.",
    "trap": "Do not infer additional attack activities merely because they often accompany an intrusion."
  },
  {
    "id": "attack-10",
    "topic": "attack",
    "prompt": "A novice uses an existing attack toolkit against a website without understanding its code. Which description is the closest fit?",
    "options": [
      "A script kiddie relying on a ready-made toolkit",
      "A hacktivist seeking attention for a political cause",
      "A malicious insider abusing an approved access role",
      "A state-sponsored actor pursuing an intelligence objective"
    ],
    "answer": [
      0
    ],
    "explanation": "Dependence on ready-made tools with limited understanding is the relevant clue for a script kiddie. The scenario provides no evidence of a political cause, legitimate internal role, or state objective.",
    "trap": "Tool use alone does not establish motive, sponsorship, or organizational access."
  },
  {
    "id": "risk-1",
    "topic": "risk",
    "prompt": "A library plans security for new self-service equipment. What should it establish before choosing controls?",
    "options": [
      "Identify important assets, relevant threats, and exploitable weaknesses.",
      "Rank available products by the number of advertised protections.",
      "Choose controls that match the library’s existing purchase contracts.",
      "Use another library’s control list as the required local baseline."
    ],
    "answer": [
      0
    ],
    "explanation": "A local assessment connects controls to assets and actual risks. Product features, purchasing arrangements, and another organization’s list can inform later decisions but do not establish what needs protection here.",
    "trap": "A convenient selection method does not replace identifying the risk."
  },
  {
    "id": "risk-2",
    "topic": "risk",
    "prompt": "A shared project folder allows any visitor to edit files. Which element is the vulnerability?",
    "options": [
      "The folder permission that lets any visitor edit project files",
      "The project designs that are stored in the folder",
      "A visitor who intends to damage the project designs",
      "The staff time needed to rebuild altered project files"
    ],
    "answer": [
      0
    ],
    "explanation": "The permission is the exploitable weakness. The designs are assets, the hostile visitor is a threat source, and rebuilding time is a consequence.",
    "trap": "Label the weakness rather than the asset, actor, or resulting loss."
  },
  {
    "id": "risk-3",
    "topic": "risk",
    "prompt": "A weather service could lose customer access if its only internet connection fails. Which fact primarily describes impact?",
    "options": [
      "An outage would delay delivery of urgent alerts to subscribers.",
      "The provider recorded several connection failures last year.",
      "Nearby construction could damage the connection’s buried cable.",
      "The connection depends on a component with frequent faults."
    ],
    "answer": [
      0
    ],
    "explanation": "Delayed urgent alerts describe what would happen if the connection failed: impact. Failure history, construction exposure, and unreliable components help explain likelihood.",
    "trap": "Keep a consequence separate from a reason the incident could occur."
  },
  {
    "id": "risk-4",
    "topic": "risk",
    "prompt": "Two identical vulnerable devices hold equally important data. Which additional fact most directly increases the likelihood of one being exploited?",
    "options": [
      "One device accepts connections from untrusted internet users.",
      "One device supports a service with greater outage costs.",
      "One device would require more staff effort to restore.",
      "One device is covered by stricter breach-reporting obligations."
    ],
    "answer": [
      0
    ],
    "explanation": "Reachability increases an attacker’s opportunity to exploit the device. Outage cost, restoration effort, and reporting obligations describe possible consequences instead.",
    "trap": "Holding vulnerability and data importance constant makes exposure the likelihood-related distinction."
  },
  {
    "id": "risk-5",
    "topic": "risk",
    "prompt": "A team uses written descriptions to label risks “minor,” “significant,” or “severe.” Which method is it using?",
    "options": [
      "Qualitative risk assessment",
      "Quantitative risk assessment",
      "Technical vulnerability assessment",
      "Adversarial penetration testing"
    ],
    "answer": [
      0
    ],
    "explanation": "Descriptive risk categories indicate qualitative assessment. Quantitative assessment estimates numerical frequency or loss; vulnerability assessment identifies weaknesses; penetration testing attempts exploitation within authorization.",
    "trap": "Assigning a risk category is different from finding or exploiting a vulnerability."
  },
  {
    "id": "risk-6",
    "topic": "risk",
    "prompt": "A team estimates a 0.2 annual incident frequency and a $15,000 loss per incident. Which approach is represented?",
    "options": [
      "Quantitative risk assessment",
      "Qualitative risk assessment",
      "Technical vulnerability assessment",
      "Adversarial penetration testing"
    ],
    "answer": [
      0
    ],
    "explanation": "Numerical incident frequency and dollar loss are quantitative inputs. A qualitative approach uses descriptive categories; technical assessments and penetration tests address weaknesses or exploitability rather than annual financial loss directly.",
    "trap": "Identify what is being estimated, not merely whether the work concerns security."
  },
  {
    "id": "risk-7",
    "topic": "risk",
    "prompt": "A workshop has a frequently used shared machine with an easily exploited flaw and an isolated demonstration device with no important data. What is the strongest basis for prioritizing work?",
    "options": [
      "Compare each device’s exposure and the consequences of compromise.",
      "Rank the devices by how long each flaw has remained unpatched.",
      "Rank the devices by the number of flaws recorded for each.",
      "Compare the devices’ purchase prices and remaining warranty coverage."
    ],
    "answer": [
      0
    ],
    "explanation": "Exposure and consequences connect directly to likelihood and impact. Patch age, flaw count, and purchase price can contribute context but are inadequate as the primary basis for comparing these two situations.",
    "trap": "A convenient technical or financial measure is not a complete risk comparison."
  },
  {
    "id": "risk-8",
    "topic": "risk",
    "prompt": "An organization estimates an annual loss of $3,000 from a recurring incident. What does this estimate mean?",
    "options": [
      "An estimated average loss per year across years with differing outcomes.",
      "A predicted repair cost for the next individual occurrence.",
      "An annual budget allowance for purchasing additional security controls.",
      "A threshold below which an individual incident needs no response."
    ],
    "answer": [
      0
    ],
    "explanation": "Expected annual loss combines estimated frequency and loss over time. It is not the cost of the next incident, a security budget, or an automatic threshold for ignoring incidents.",
    "trap": "An annual expected value is different from a per-incident cost or a treatment decision."
  },
  {
    "id": "risk-9",
    "topic": "risk",
    "prompt": "A museum is evaluating exploitation of a flaw in its digital catalog. Select TWO facts that directly inform likelihood or impact.",
    "options": [
      "Whether outside attackers can reach the catalog’s vulnerable application interface",
      "How losing catalog access would affect the museum’s daily operations",
      "Whether the catalog vendor leads its market in annual sales",
      "How often the vendor releases cosmetic changes to its interface"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Attack reachability informs likelihood, and operational disruption informs impact. Vendor sales and cosmetic release frequency do not directly establish this catalog’s exposure or consequences.",
    "trap": "Useful facts must connect to the specific threat and asset, not simply describe the vendor."
  },
  {
    "id": "risk-10",
    "topic": "risk",
    "prompt": "A risk report says “the backup may fail” but gives no supporting information. What is the most useful next step?",
    "options": [
      "Check restoration tests, failure history, and operational consequences.",
      "Estimate risk from the backup product’s published reliability claim.",
      "Assign severity from the age and replacement cost of backup hardware.",
      "Use another department’s backup rating as the current system’s rating."
    ],
    "answer": [
      0
    ],
    "explanation": "Local restoration results and failure history provide evidence about this backup, while operational consequences establish impact. Vendor claims, hardware measures, and another department’s rating are incomplete substitutes for that assessment.",
    "trap": "Seek evidence about whether this system can restore what this organization needs."
  },
  {
    "id": "response-1",
    "topic": "response",
    "prompt": "A team enables automatic updates and restricts unnecessary access to reduce a known risk. Which response is represented?",
    "options": [
      "Mitigation",
      "Acceptance",
      "Transference",
      "Avoidance"
    ],
    "answer": [
      0
    ],
    "explanation": "Updates and access restrictions reduce risk while the activity continues, making this mitigation. Acceptance retains risk without further treatment, transference allocates consequences, and avoidance ends the relevant activity.",
    "trap": "Match the response to what changed about the risk-generating activity."
  },
  {
    "id": "response-2",
    "topic": "response",
    "prompt": "A firm moves a hazardous data-processing task out of its business model and no longer performs it. Which response applies to that task’s risk?",
    "options": [
      "Avoidance",
      "Mitigation",
      "Transference",
      "Acceptance"
    ],
    "answer": [
      0
    ],
    "explanation": "The firm stops performing the activity, avoiding the associated task risk. Mitigation continues the activity with safeguards; transference allocates consequences; acceptance retains the exposure.",
    "trap": "Stopping the activity is different from making it safer or reallocating its costs."
  },
  {
    "id": "response-3",
    "topic": "response",
    "prompt": "A contract requires a service provider to bear specified financial costs if it causes a security incident. Which response does the cost allocation illustrate?",
    "options": [
      "Transference",
      "Mitigation",
      "Avoidance",
      "Acceptance"
    ],
    "answer": [
      0
    ],
    "explanation": "The specified financial consequences are allocated to the service provider. The contract does not itself show reduced likelihood, termination of the activity, or simple retention of the cost.",
    "trap": "Classify the contractual cost allocation, rather than assuming the contract prevents an incident."
  },
  {
    "id": "response-4",
    "topic": "response",
    "prompt": "A risk owner documents a minor remaining risk and approves continuing without additional treatment for now. Which response is this?",
    "options": [
      "Acceptance",
      "Mitigation",
      "Transference",
      "Avoidance"
    ],
    "answer": [
      0
    ],
    "explanation": "The owner knowingly retains the remaining risk without additional treatment for now. Documenting the decision does not itself reduce exposure, transfer its costs, or end the activity.",
    "trap": "Documentation makes acceptance accountable; it does not turn it into mitigation."
  },
  {
    "id": "response-5",
    "topic": "response",
    "prompt": "After stronger authentication is introduced, account compromise is less likely but still possible. What is the remaining risk called?",
    "options": [
      "Residual risk",
      "Inherent risk",
      "Transferred risk",
      "Accepted risk"
    ],
    "answer": [
      0
    ],
    "explanation": "Residual risk describes what remains after controls. Inherent risk is assessed before treatment. Remaining risk could later be accepted or transferred in part, but neither decision is stated here.",
    "trap": "The existence of remaining risk does not establish how its owner has chosen to handle it."
  },
  {
    "id": "response-6",
    "topic": "response",
    "prompt": "A team estimates the risk of a new service assuming no security controls are in place. What is it assessing?",
    "options": [
      "Inherent risk",
      "Residual risk",
      "Accepted risk",
      "Transferred risk"
    ],
    "answer": [
      0
    ],
    "explanation": "Inherent risk is assessed without the relevant protections. Residual risk includes their effects; accepted and transferred describe decisions about handling risk.",
    "trap": "Separate the timing of an assessment from the decision made afterward."
  },
  {
    "id": "response-7",
    "topic": "response",
    "prompt": "A vendor promises to cover restoration costs after a hosted-service failure. What should the customer still consider?",
    "options": [
      "Recovery costs can shift while disruption and reputational harm remain.",
      "Recovery costs shift together with the customer’s incident-response duties.",
      "Recovery costs shift together with the likelihood of a service failure.",
      "Recovery costs can shift only after the customer ends the service."
    ],
    "answer": [
      0
    ],
    "explanation": "The promise reallocates defined costs. It does not necessarily remove response duties, change the chance of failure, or require ending the service. Disruption and reputational harm can remain with the customer.",
    "trap": "Distinguish who pays a defined cost from who experiences or manages the incident."
  },
  {
    "id": "response-8",
    "topic": "response",
    "prompt": "A repair reduces an incident’s likelihood from frequent to rare, but the possible harm is unchanged. Which statement is strongest?",
    "options": [
      "Risk decreases through lower likelihood, while the potential impact remains serious.",
      "Risk stays unchanged because the possible incident impact is unchanged.",
      "Risk becomes accepted because further incidents are now less frequent.",
      "Risk becomes transferred because a repair changed the original exposure."
    ],
    "answer": [
      0
    ],
    "explanation": "A reduction in likelihood can reduce risk even when impact is unchanged. The repair is mitigation; acceptance and transference require different decisions or arrangements not described here.",
    "trap": "Risk can change through either likelihood or impact; treatment labels depend on the action taken."
  },
  {
    "id": "response-9",
    "topic": "response",
    "prompt": "A team accepts a low risk for six months. Select TWO sensible follow-up actions.",
    "options": [
      "Record the risk owner’s approval and the basis for acceptance.",
      "Set a review date and reconsider if the exposure changes.",
      "Classify the risk as mitigated because approval has been documented.",
      "Remove the risk from tracking until a related incident occurs."
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Acceptance should retain ownership, a rationale, and review triggers. Approval is not a mitigating control, and waiting for an incident can miss changes that make the risk unacceptable.",
    "trap": "Acceptance retains a known risk; it does not remove the need to track its context."
  },
  {
    "id": "response-10",
    "topic": "response",
    "prompt": "Two controls each reduce the same risk. One is cheap but unreliable; the other costs more and has demonstrated reliable protection. What should guide the choice?",
    "options": [
      "Compare expected risk reduction, total cost, and applicable requirements.",
      "Compare purchase prices and choose the option with lower initial cost.",
      "Compare advertised coverage and choose the option with more features.",
      "Compare reliability records and select the stronger option regardless of cost."
    ],
    "answer": [
      0
    ],
    "explanation": "The decision needs to weigh effectiveness, full cost, and requirements together. Price, feature count, or reliability alone can overlook another material part of the decision.",
    "trap": "Use a combination of relevant factors rather than one attractive measure."
  },
  {
    "id": "control-1",
    "topic": "control",
    "prompt": "A repair shop uses a locked enclosure to secure outdoor equipment. Which control type best describes the enclosure?",
    "options": [
      "Physical, because it creates a barrier around the equipment.",
      "Technical, because it enforces a restriction on unauthorized access.",
      "Managerial, because it establishes a rule about equipment access.",
      "Detective, because it identifies attempts to remove the equipment."
    ],
    "answer": [
      0
    ],
    "explanation": "The enclosure provides a physical barrier. Restricting access does not automatically make a control technical, and the enclosure is not itself a written rule or a detecting mechanism. Detective also describes a function rather than a type.",
    "trap": "Classify how the specific control operates, not just its general security goal."
  },
  {
    "id": "control-2",
    "topic": "control",
    "prompt": "A system automatically rejects a file upload from an unapproved application. Which control type best fits?",
    "options": [
      "Technical, because software automatically enforces which applications can upload files.",
      "Managerial, because an approval rule defines permitted uploads.",
      "Physical, because the upload eventually reaches a storage device.",
      "Detective, because the system recognizes an unapproved application."
    ],
    "answer": [
      0
    ],
    "explanation": "The question describes automatic software enforcement, a technical control. The underlying approval policy is managerial, the storage medium does not make enforcement physical, and detective is a function rather than the requested type.",
    "trap": "Classify the described enforcement mechanism rather than its policy source or physical hardware."
  },
  {
    "id": "control-3",
    "topic": "control",
    "prompt": "A written procedure defines who must approve access to confidential projects. Which type is this procedure?",
    "options": [
      "Managerial, because the procedure assigns approval responsibilities.",
      "Technical, because the procedure concerns access to digital projects.",
      "Physical, because approval is given by an authorized person.",
      "Preventive, because approval happens before project access is granted."
    ],
    "answer": [
      0
    ],
    "explanation": "The written procedure defines responsibilities, making it managerial. Its digital subject does not make it technical; involvement of a person does not make it a physical barrier. Preventive is a function, not the requested type.",
    "trap": "A control’s subject, type, and purpose are related but distinct."
  },
  {
    "id": "control-4",
    "topic": "control",
    "prompt": "A filter blocks prohibited downloads before they reach a device. What is its primary function?",
    "options": [
      "Preventive",
      "Detective",
      "Corrective",
      "Deterrent"
    ],
    "answer": [
      0
    ],
    "explanation": "Blocking the download before it reaches the device is preventive. Detecting would identify the event, correcting would repair a problem, and deterring would discourage an attempt.",
    "trap": "Identify the action emphasized: blocking, observing, repairing, or discouraging."
  },
  {
    "id": "control-5",
    "topic": "control",
    "prompt": "An inventory audit reveals that several tablets are missing. Which function does the audit primarily serve?",
    "options": [
      "Detective",
      "Preventive",
      "Corrective",
      "Deterrent"
    ],
    "answer": [
      0
    ],
    "explanation": "The audit reveals a discrepancy, so its primary function is detective. It does not block removal, replace missing tablets, or primarily communicate a warning.",
    "trap": "Finding a loss is different from preventing it or recovering from it."
  },
  {
    "id": "control-6",
    "topic": "control",
    "prompt": "After discovering incorrect sharing permissions, an administrator restores the approved settings. Which function does this action primarily serve?",
    "options": [
      "Corrective",
      "Preventive",
      "Detective",
      "Deterrent"
    ],
    "answer": [
      0
    ],
    "explanation": "The administrator is repairing a discovered configuration problem, making the action corrective. The restored permissions may prevent future exposure, but that future effect is not the action emphasized.",
    "trap": "Classify the repair action in its context, rather than only the purpose of the restored setting."
  },
  {
    "id": "control-7",
    "topic": "control",
    "prompt": "A visible sign announces that equipment serial numbers are tracked and theft is reported. What is the sign’s primary intended function?",
    "options": [
      "Deterrent",
      "Detective",
      "Preventive",
      "Corrective"
    ],
    "answer": [
      0
    ],
    "explanation": "The visible sign aims to discourage theft. Actual tracking records could support detection, but announcing their existence is a deterrent action rather than an access barrier or repair.",
    "trap": "Classify the sign itself, not a separate control mentioned in its message."
  },
  {
    "id": "control-8",
    "topic": "control",
    "prompt": "A storage yard uses an outer fence, a secured workshop, and locked tool containers inside. Why do these layers help?",
    "options": [
      "A later barrier can restrict access after an earlier barrier fails.",
      "The outer barrier can substitute for maintaining the inner access controls.",
      "Additional barriers provide the same benefit regardless of shared weaknesses.",
      "The barriers mainly improve the speed of restoring equipment after damage."
    ],
    "answer": [
      0
    ],
    "explanation": "Layering reduces reliance on a single barrier because another can remain effective. Inner controls still need maintenance; shared weaknesses can undermine several layers; these barriers primarily restrict access rather than restore equipment.",
    "trap": "Multiple controls help when their placement, operation, and failure modes provide meaningful additional protection."
  },
  {
    "id": "control-9",
    "topic": "control",
    "prompt": "An organization writes a password rule and configures software to enforce it. Select TWO accurate classifications.",
    "options": [
      "The written password requirement defines a managerial control for staff.",
      "The software enforcing the requirement implements a technical access control.",
      "The written requirement is technical because its subject concerns passwords.",
      "The software is managerial because it implements an organizational rule."
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "The rule defines an expectation; the software implements it. A digital subject does not make a written policy technical, and implementing a policy does not make the software managerial.",
    "trap": "Classify the component’s mechanism rather than the subject it addresses."
  },
  {
    "id": "control-10",
    "topic": "control",
    "prompt": "A fence marks the property boundary, a reception checkpoint controls building entry, and a tether secures a display tablet. Which mapping is best?",
    "options": [
      "Perimeter; facility; asset",
      "Facility; perimeter; asset",
      "Perimeter; asset; facility",
      "Asset; facility; perimeter"
    ],
    "answer": [
      0
    ],
    "explanation": "The fence protects the property boundary, the reception checkpoint controls building entry, and the tether secures a specific item. Those correspond to perimeter, facility, and asset.",
    "trap": "Map each layer to what it protects, keeping the order of the examples."
  },
  {
    "id": "evidence-1",
    "topic": "evidence",
    "prompt": "An internal audio recording is accidentally shared with the public. No one changes the recording and the original remains accessible. Which CIA principle is most directly affected?",
    "options": [
      "Confidentiality, because the public can listen to an internal recording.",
      "Integrity, because publication changes who can use the recording.",
      "Availability, because the audience now includes unintended listeners.",
      "Integrity and availability, because sharing replaces the original recording."
    ],
    "answer": [
      0
    ],
    "explanation": "The demonstrated harm is unauthorized disclosure. A larger audience does not establish changed content, loss of access, or replacement of the original recording.",
    "trap": "Access by the wrong people is a confidentiality issue; a change in audience is not itself a change in content."
  },
  {
    "id": "evidence-2",
    "topic": "evidence",
    "prompt": "A faulty import changes product quantities in an inventory database. The system stays online. Which principle is most directly affected?",
    "options": [
      "Integrity, because the stored quantities no longer reflect accurate information.",
      "Availability, because staff must spend time checking the stored quantities.",
      "Confidentiality, because the imported quantities came from another data source.",
      "Confidentiality and availability, because staff now receive unusable inventory records."
    ],
    "answer": [
      0
    ],
    "explanation": "The import changes quantities incorrectly, directly affecting accuracy and therefore integrity. Checking data may cost time, but the facts do not establish lost system access or unauthorized disclosure.",
    "trap": "Choose the demonstrated property of the information, not a possible secondary consequence."
  },
  {
    "id": "evidence-3",
    "topic": "evidence",
    "prompt": "A traffic flood makes a public appointment service unreachable to its legitimate users. No alteration or disclosure is established. Which principle is most directly affected?",
    "options": [
      "Availability, because legitimate users cannot reach the appointment service.",
      "Integrity, because legitimate requests are mixed with unwanted network traffic.",
      "Confidentiality, because outsiders are sending traffic to the service.",
      "Confidentiality and integrity, because the service receives untrusted network traffic."
    ],
    "answer": [
      0
    ],
    "explanation": "The established harm is loss of access for legitimate users. Unwanted traffic alone does not establish altered records or disclosed information.",
    "trap": "A network event can affect one CIA principle without evidence of the others."
  },
  {
    "id": "evidence-4",
    "topic": "evidence",
    "prompt": "An audit record shows that a shared editor account changed a theater’s ticket prices. What can the record alone establish?",
    "options": [
      "The system attributed a price edit to the shared account.",
      "The volunteer on duty personally performed the recorded price edit.",
      "The account’s owner approved the recorded change to ticket prices.",
      "Someone who knew the password intentionally entered incorrect ticket prices."
    ],
    "answer": [
      0
    ],
    "explanation": "The record establishes an event attributed to the account. Shared credentials prevent direct attribution to one volunteer, and the record alone does not establish approval, intent, or even who actually used the credentials.",
    "trap": "Keep the recorded account event separate from identity, authorization, and intent."
  },
  {
    "id": "evidence-5",
    "topic": "evidence",
    "prompt": "A temperature sensor reports an unexpected spike in an equipment room. Which next step best tests the alert?",
    "options": [
      "Compare a separate reading with current equipment and maintenance activity.",
      "Reset the sensor and wait to see whether another alert occurs.",
      "Inspect recent entry records to identify the likely person responsible.",
      "Raise the alert threshold to match the room’s latest temperature reading."
    ],
    "answer": [
      0
    ],
    "explanation": "An independent reading and operational context help test whether the temperature change is real and explain it. Resetting may lose useful evidence, entry records presume a person is responsible, and changing the threshold does not validate the reading.",
    "trap": "Test the alert before changing the monitoring rule or attributing a cause."
  },
  {
    "id": "evidence-6",
    "topic": "evidence",
    "prompt": "An unauthorized museum guest enters a staff area alongside an employee. What missing fact would best distinguish piggybacking from tailgating under this course’s definitions?",
    "options": [
      "Whether the employee knowingly allowed the guest to enter",
      "Whether the guest used the same entrance as the employee",
      "Whether the guest had previously visited the museum’s staff area",
      "Whether the guest intended to access information inside the area"
    ],
    "answer": [
      0
    ],
    "explanation": "Under this course’s definitions, the employee’s awareness distinguishes piggybacking from unnoticed tailgating. The route, prior visits, and guest’s intended objective do not settle that distinction.",
    "trap": "Identify the fact that distinguishes the two categories, not merely a useful investigative detail."
  },
  {
    "id": "evidence-7",
    "topic": "evidence",
    "prompt": "A reviewer notices unusual access to a document but cannot tell whether it was approved. Select TWO useful next steps.",
    "options": [
      "Compare the recorded event with the document owner’s access-approval records.",
      "Check whether the event aligns with the user’s assigned work.",
      "Classify the event as unauthorized because its timing was unusual.",
      "Classify the event as approved because the system accepted credentials."
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Approval records and work context help test authorization. Unusual timing alone does not establish misuse; accepted credentials alone do not establish that a particular access was permitted.",
    "trap": "Authentication is evidence about an account, not automatic proof of authorization or misconduct."
  },
  {
    "id": "evidence-8",
    "topic": "evidence",
    "prompt": "A team proposes requiring individual accounts instead of one shared account. Which investigative benefit is strongest?",
    "options": [
      "Account-specific records make it easier to investigate who used access.",
      "Account-specific records establish who personally performed each recorded action.",
      "Individual accounts replace the need to compare activity with assigned duties.",
      "Individual accounts show whether each recorded action had management approval."
    ],
    "answer": [
      0
    ],
    "explanation": "Individual accounts improve accountability by distinguishing activity more clearly. They do not conclusively prove the human user, eliminate the need for context, or automatically establish management approval.",
    "trap": "Better attribution evidence still needs interpretation and corroboration."
  },
  {
    "id": "evidence-9",
    "topic": "evidence",
    "prompt": "A version history shows that a document changed at 14:12. A staff interview says the document was already wrong at noon. What should an investigator do?",
    "options": [
      "Compare clock settings, earlier versions, and the interview’s basis.",
      "Use the version timestamp because system records are more objective.",
      "Use the interview time because staff observed the document directly.",
      "Treat the two times as separate incidents without further verification."
    ],
    "answer": [
      0
    ],
    "explanation": "The sources may differ in scope, clock settings, document versions, or reliability. Checking those possibilities is stronger than automatically favoring either source or assuming two incidents occurred.",
    "trap": "Investigate the reason for a conflict before deciding which explanation fits."
  },
  {
    "id": "evidence-10",
    "topic": "evidence",
    "prompt": "A business restores a corrupted database from a verified backup. Which explanation best connects the action to CIA goals?",
    "options": [
      "Integrity through recovery of accurate information; availability through restored access.",
      "Confidentiality through replacing copies; integrity through restored access.",
      "Availability through accurate recovery; confidentiality through restored access.",
      "Integrity through limiting users; confidentiality through recovering older records."
    ],
    "answer": [
      0
    ],
    "explanation": "Recovering verified accurate information supports integrity; returning it to legitimate use supports availability. Restoring a backup does not by itself restrict users or undo a possible disclosure.",
    "trap": "Connect each principle to the specific effect of the restoration."
  }
];

