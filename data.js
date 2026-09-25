// Curated navigation, grounded in the dissertation's printed page numbers.
// Similar figure series share a single representative asset in figures.js.
window.THESIS = {
 id:'home', title:'A journey through the thesis', label:'Thesis overview', page:1,
 summary:'From calibrated photon energies to neutral-meson production. Explore the ideas, methods, and measurements one layer at a time.',
 phrases:['p + p collisions','√s = 200 GeV','π⁰, η → γγ','sPHENIX · Run 24'],
 children:[
 {id:'intro',num:'01',title:'Introduction & motivation',label:'Introduction',page:24,tag:'Brief overview',summary:'Why measure neutral mesons in proton–proton collisions?',phrases:['A baseline for heavy-ion collisions','Validate a new detector','Connect to QGP studies'],takeaway:'Proton–proton data establish a reference for interpreting nuclear collisions and testing sPHENIX performance.'},
 {id:'theory',num:'02',title:'Theoretical framework',label:'Theory',page:38,tag:'Brief overview',summary:'The physics behind hadron production.',phrases:['Quantum chromodynamics','Parton distributions × hard scattering × fragmentation','Invariant cross sections','η / π⁰ ratio'],takeaway:'Cross sections and meson ratios connect reconstructed particles to the underlying production processes.'},
 {id:'setup',num:'03',title:'Experimental setup',label:'Experiment',page:58,tag:'Brief overview',summary:'RHIC collisions, measured with sPHENIX.',phrases:['RHIC at Brookhaven','Electromagnetic calorimeter','Full azimuthal coverage','Minimum-bias and photon triggers'],figure:'detector',takeaway:'The EMCal supplies the photon energy and position information used throughout this measurement.'},
 {id:'calibration',num:'04',title:'EMCal calibration',label:'Calibration',page:73,summary:'Turn tower energies into reliable photon measurements.',phrases:['π⁰ mass reference','Iterative tower corrections','Quality masks'],children:[
  {id:'cal-strategy',title:'The calibration loop',page:73,summary:'Reconstruct → fit → correct → repeat.',phrases:['Build photon pairs','Fit the π⁰ mass peak','Update tower factors','Repeat to convergence'],figure:'calibration',children:[
   {id:'cal-fit',title:'Reconstruct & fit',page:74,summary:'Use the abundant π⁰ → γγ signal.',phrases:['Selected photon pairs','Gaussian signal','Polynomial sidebands'],takeaway:'The fitted peak position provides a tower-level energy reference.'},
   {id:'cal-iterate',title:'Apply & iterate',page:75,summary:'Repeat the reconstruction after energy corrections.',phrases:['Tower-dependent factors','Stabilize peak positions','Check statistical convergence'],takeaway:'Calibration is an iterative reconstruction procedure.'}
  ]},
  {id:'cal-runs',title:'Implementation across runs',page:75,summary:'Adapt the calibration granularity to available statistics.',phrases:['Run 23 Au + Au: η slices','Run 24 p + p: tower by tower','Run 26 O + O: tower by tower'],children:[
   {id:'cal-final',title:'The constants used in this analysis',page:77,summary:'Run 24 p + p calibration after six iterations.',phrases:['Six iterations','138.6 MeV target','Feed corrected energies into clustering'],figure:'constants'},
   {id:'cal-slices',title:'Low-statistics strategy',page:75,summary:'Merge towers along ϕ within one η slice.',phrases:['Common factor per η slice','Used in Run 23 Au + Au'],takeaway:'η-slice calibration supplies a practical starting point when individual towers have too few pairs.'}
  ]},
  {id:'cal-mask',title:'Hard-to-calibrate regions',page:78,summary:'Exclude towers with unreliable response.',phrases:['Hot, dead, and cold towers','Missing or unstable π⁰ peak','Apply consistent masks'],figure:'tower-map'},
  {id:'cal-multiplicity',title:'Multiplicity effects',page:79,summary:'Overlapping clusters change reconstructed peak shapes.',phrases:['HIJING Au + Au simulation','Cluster count as pseudo-centrality','Higher multiplicity: larger mean and width'],figure:'multiplicity',takeaway:'These are reconstruction effects, not a change in the intrinsic π⁰ mass. Centrality-dependent calibration needs further study.'}
 ]},
 {id:'analysis',num:'05',title:'Neutral meson analysis',label:'Analysis',page:84,summary:'Follow the chain from selected events to corrected observables.',phrases:['Select','Reconstruct','Subtract','Correct'],children:[
  {id:'selection',title:'Data & event selection',page:84,summary:'Run 24 p + p at zero crossing angle.',children:[
   {id:'runs',title:'Run quality',page:84,summary:'Choose runs that pass data-quality requirements.',phrases:['Minimum-bias trigger present','Livetime > 70%','More than 1 million reconstructed events']},
   {id:'events',title:'Collision vertex & triggers',page:85,summary:'Two vertex selections for two analysis directions.',phrases:['pT study: |zᵥₜₓ| < 30 cm','Pseudorapidity study: |zᵥₜₓ| < 200 cm','MB, Photon 3 GeV, Photon 4 GeV'],takeaway:'The pseudorapidity study uses Photon 4 GeV data in 5.5 < pT < 6.5 GeV.'},
   {id:'trigger',title:'Trigger efficiency',page:86,summary:'Use photon triggers to extend the momentum reach.',phrases:['Measure the turn-on','Correct trigger efficiency','Check overlap between triggers'],figure:'trigger'}
  ]},
  {id:'photons',title:'Photon & pair reconstruction',page:91,summary:'Build clean photon candidates and pair them.',children:[
   {id:'clusters',title:'Build EMCal clusters',page:92,summary:'Group nearby tower energy deposits.',phrases:['Tower threshold: 70 MeV','Cluster energy: sum of towers','Position: energy-weighted centroid','Cluster energy threshold: 0.4 GeV']},
   {id:'cuts',title:'The golden selection',page:118,summary:'The reference cut set for the final analysis.',phrases:['Photon pT: > 0.8 and > 0.6 GeV','Shower shape: χ² < 5','Pair separation: ΔR < 1.1','Energy asymmetry: α < 0.6'],takeaway:'Vary these cuts to estimate systematic uncertainties. Track matching was unavailable for this dataset.'},
   {id:'mass',title:'Reconstruct invariant mass',page:94,summary:'Photon energies and opening angle reveal the parent meson.',phrases:['mγγ = √[2E₁E₂(1 − cos θγγ)]','π⁰ and η peaks','Signal plus background'],figure:'mass'}
  ]},
  {id:'background',title:'Background & signal extraction',page:96,summary:'One primary method, with independent cross-checks.',children:[
   {id:'sideband',title:'Side-band fitting',page:98,tag:'Primary method',summary:'Fit the background outside the signal region.',phrases:['Exclude the peak','Fit sidebands','Subtract background','Extract raw yield'],figure:'sideband',takeaway:'The primary extraction method for both π⁰ and η across the measured pT ranges.'},
   {id:'swapping',title:'Position swapping',page:100,tag:'π⁰ cross-check',summary:'Break pair correlations within the same event.',phrases:['Choose a third photon','Swap η and ϕ coordinates','Keep energy fixed','Recalculate kinematics and apply cuts'],figure:'swapping',takeaway:'An alternative π⁰ background estimate. The p + p study excludes pT below 3 GeV because extra tuning is needed.',related:['auau']},
   {id:'weighted',title:'Weighted background',page:103,tag:'η cross-check',summary:'Correct mixed-event background using pair geometry.',phrases:['Start from mixed events','Use ΔR–pT structure','Reweight the background','Estimate η yield systematics'],figure:'weighted',children:[
    {id:'geometry',title:'Why opening-angle weights help',page:104,summary:'π⁰ and η occupy distinct decay-geometry bands.',phrases:['Fast Monte Carlo','sPHENIX energy smearing','Distinct bands in ΔR versus pT'],figure:'separation'}
   ]},
   {id:'ml-intro',title:'Machine learning route',page:106,tag:'Exploratory',summary:'XGBoost tested on simulated η decays.',phrases:['Simulation proof of concept','About 94.8% signal recovery','Not used in the reported physics results'],related:['machine-learning']}
  ]},
  {id:'efficiency',title:'Acceptance & efficiency',page:107,summary:'Account for what the detector and reconstruction miss.',children:[
   {id:'simulation',title:'Embedding & truth matching',page:107,summary:'Embed mesons into simulated events and reconstruct their decay photons.',phrases:['PYTHIA + GEANT4','One-to-one truth matching','ΔR < 0.3 and energy consistency','Count reconstructed versus embedded mesons']},
   {id:'corrections',title:'Match simulation to data',page:109,summary:'Apply three essential corrections.',phrases:['Vertex-distribution weights','pT weights from modified Hagedorn fits','Mask non-functional towers and neighbors'],figure:'vertex'},
   {id:'eff-result',title:'The efficiency correction',page:111,summary:'Reconstructed mesons divided by embedded mesons.',phrases:['Acceptance and reconstruction','Decay branching ratio included','Non-functional towers included'],figure:'efficiency',takeaway:'The displayed π⁰ panels represent the efficiency study; η and pseudorapidity-dependent versions remain in the source PDF.'}
  ]},
  {id:'observables',title:'From yields to observables',page:115,summary:'Correct the spectra and form the meson ratio.',children:[
   {id:'cross-definition',title:'Invariant cross section',page:115,summary:'Convert raw yield using luminosity, efficiency, and bin geometry.',phrases:['Corrected yield','Integrated luminosity','pT and rapidity-bin factors','|η| < 0.35 and |η| < 1.0']},
   {id:'ratio-definition',title:'η / π⁰ ratio',page:115,summary:'Compare the two corrected production rates.',phrases:['Shared normalization cancels','Reduced correlated systematics','Study versus pT and pseudorapidity'],related:['ratio']},
   {id:'normalization',title:'Global normalization',page:116,summary:'Fix one common factor using the PHENIX π⁰ spectrum.',phrases:['|η| < 0.35','Three bins around pT = 4.5 GeV','One factor for all spectra and triggers'],takeaway:'Agreement near the normalization point is imposed. The spectral shapes and the η / π⁰ ratio provide additional checks.'}
  ]},
  {id:'uncertainties',title:'Uncertainty budget',page:117,summary:'Track statistics and analysis-dependent shifts.',children:[
   {id:'statistical',title:'Statistical errors',page:118,summary:'Propagate histogram count and weight uncertainties.',phrases:['Poisson counting','ROOT Sumw2 for weights','Propagate through corrections and ratios']},
   {id:'systematic',title:'Selection & background variations',page:118,summary:'Compare variations to the golden parameter set.',phrases:['Vary χ², α, and ΔR','Vary minimum photon pT','Vary truth-matching ΔR','Compare background methods','Combine sources in quadrature']},
   {id:'scale',title:'Energy scale & normalization',page:117,summary:'A small energy shift can strongly change a falling spectrum.',phrases:['3% energy-scale estimate','10% luminosity estimate','Global normalization still under study'],figure:'energy-scale'}
  ]}
 ]},
 {id:'results',num:'06',title:'Results',label:'Results',page:122,summary:'What the reconstructed mesons tell us.',phrases:['Peak performance','Spectral shapes','η / π⁰ ratio'],children:[
  {id:'peak',title:'Mass peaks & widths',page:122,summary:'Check the reconstructed signal across momentum.',phrases:['π⁰ and η mass peaks','Width versus pT','Fit uncertainties'],figure:'peak'},
  {id:'cross-section',title:'Invariant cross sections',page:125,summary:'Compare corrected spectra with PHENIX.',phrases:['Narrow and wide η acceptance','Consistent spectral shapes','Smooth trigger overlap'],figure:'cross-section',children:[
   {id:'cross-meaning',title:'How to interpret agreement',page:128,summary:'Separate the normalization choice from the shape comparison.',phrases:['Match fixed near 4.5 GeV','Check behavior across pT','Common normalization across triggers'],takeaway:'The normalization-point agreement is not an independent validation; the shape and relative trigger consistency are meaningful checks.',related:['normalization']}
  ]},
  {id:'ratio',title:'η / π⁰ versus pT',page:134,tag:'Central result',summary:'A ratio independent of the common normalization factor.',phrases:['Rises with pT','Approaches approximately 0.5','Consistent with PHENIX','Yield systematics dominate'],figure:'ratio',takeaway:'The meson ratio provides an independent physics check of sPHENIX performance.'},
  {id:'rapidity',title:'η / π⁰ versus pseudorapidity',page:137,summary:'Extend the measurement along the detector’s longitudinal coverage.',phrases:['5.5 < pT < 6.5 GeV','Photon 4 GeV trigger','Nearly flat within uncertainties','Large edge-bin systematics'],figure:'rapidity',takeaway:'No clear pseudorapidity dependence is resolved within the uncertainties; pile-up and calibration remain limitations.'}
 ]},
 {id:'conclusion',num:'07',title:'Discussion & outlook',label:'Conclusion',page:139,summary:'Connect the physics result to the next improvements.',children:[
  {id:'contributions',title:'Main contributions',page:139,summary:'Physics validation and analysis tools.',phrases:['η / π⁰ production measurement','EMCal calibration implementation','Alternative background methods','Exploratory η classification']},
  {id:'future',title:'What comes next',page:141,summary:'Improve precision, calibration, and the reach of the measurement.',phrases:['Finalize energy scale and luminosity','Use full tracking and conversions','Apply machine learning to data','Refine pile-up treatment','Extend to more collision datasets']}
 ]},
 {id:'appendices',num:'A–G',title:'Selected appendices',label:'Appendices',page:152,summary:'Supporting studies, with repeated examples condensed.',children:[
  {id:'machine-learning',num:'A',title:'Machine learning for η extraction',page:152,summary:'Follow the simulation study from labels to signal.',phrases:['XGBoost','Simulation only','Iterative classification'],children:[
   {id:'ml-data',title:'Dataset & labels',page:152,summary:'Simulated p + p events with truth-matched photons.',phrases:['About 15 million events','PYTHIA + GEANT4','ΔR < 0.3 truth matching','0.3 < mγγ < 0.8 GeV preselection']},
   {id:'ml-features',title:'Features & training',page:155,summary:'Use kinematic, geometric, and event information.',phrases:['Cluster and pair variables','α, ΔR, Δη, Δϕ','Cluster multiplicity','2:1 train/test split','Stratified five-fold validation'],takeaway:'Invariant mass is not an explicit classifier feature; the sample does have an invariant-mass preselection.'},
   {id:'ml-iteration',title:'Tune & iterate',page:156,summary:'Optimize the model and repeatedly reject background.',phrases:['Randomized hyperparameter search','ROC-based threshold procedure','Update class weights','15 iterations']},
   {id:'ml-result',title:'Recovered η signal',page:159,summary:'About 94.8% signal recovery in simulation.',phrases:['Strong background suppression','Some misclassification remains','Application to real data: future work'],figure:'ml',takeaway:'This exploratory classifier was not used to derive the dissertation’s cross sections or ratios.'}
  ]},
  {id:'supporting-tables',num:'B, D, E',title:'Runs & numerical tables',page:161,summary:'Keep detailed tables in the source, ready to open.',children:[
   {id:'run-table',title:'Selected Run 24 runs',page:161,summary:'Appendix B · the input run list.',phrases:['Run identifiers','Data sample provenance']},
   {id:'cross-tables',title:'Cross-section tables',page:168,summary:'Appendix D · π⁰ and η numerical measurements.',phrases:['|η| < 0.35 and |η| < 1.0','Statistical and systematic errors']},
   {id:'ratio-tables',title:'Ratio tables',page:172,summary:'Appendix E · η / π⁰ numerical measurements.',phrases:['pT dependence','Pseudorapidity dependence','Statistical and systematic errors']}
  ]},
  {id:'conversion',num:'C',title:'External photon conversion',page:164,summary:'Decay photons may convert before reaching EMCal.',phrases:['Material before the calorimeter','At least one converted decay photon','One representative π⁰ figure'],figure:'conversion'},
  {id:'auau',num:'F',title:'Position swapping in Au + Au',page:175,tag:'One representative figure',summary:'Test background reconstruction in a busier environment.',phrases:['Run 24 Au + Au','100 runs · about 220 million events','|zᵥₜₓ| < 30 cm','Qualitative robustness study'],figure:'auau',takeaway:'Figure F.8 represents the repeated pT-bin series. This study did not proceed to quantitative yield extraction.'},
  {id:'credits',num:'G',title:'Figure permissions',page:190,summary:'Original permissions and source credits.',phrases:['See Appendix G','Credits retained in the original dissertation']}
 ]}
]};
