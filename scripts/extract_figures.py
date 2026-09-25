"""Extract representative original figure regions; preserve multi-panel plots."""
from pathlib import Path
import subprocess, json
import pdfplumber
from PIL import Image
ROOT = Path(__file__).resolve().parent.parent
figures = [
 ('detector','3.2',64,'The sPHENIX detector','Detector overview; original figure credits Brookhaven National Laboratory.'),
 ('calibration','4.1',74,'The calibration loop','Pair photons, reconstruct the π⁰ peak, update tower corrections, and iterate.'),
 ('constants','4.4',77,'Tower calibration constants','Run 24 p + p; six iterations with a target mass of 138.6 MeV.'),
 ('tower-map','4.6',79,'Which towers can be used?','Green: usable. Black: hot, cold, or dead. Red: hard to calibrate.'),
 ('multiplicity','4.9',82,'Multiplicity shifts the reconstructed peak','HIJING Au + Au simulation: peak mean and width across pseudo-centrality classes.'),
 ('trigger','5.1',88,'Photon trigger efficiency','Representative Photon 3 GeV trigger curve; |zᵥₜₓ| < 30 cm.'),
 ('mass','5.5',94,'Two photons, two meson peaks','Run 24 p + p: π⁰ and η peaks above the di-photon background.'),
 ('sideband','5.7',99,'Side-band signal extraction','η example, 5.5 < pT < 6.0 GeV: background fit and subtracted spectrum.'),
 ('swapping','5.8',101,'Position swapping in p + p','π⁰ example, 5.5 < pT < 6.0 GeV: estimated background and extracted signal.'),
 ('separation','5.10',104,'Decay geometry separates the mesons','Fast simulation: distinct π⁰ and η bands in ΔR versus pair pT.'),
 ('weighted','5.11',105,'Weighted background estimation','Weighting improves the mixed-event background shape.'),
 ('vertex','5.12',110,'Matching the vertex distribution','Normalized simulation and Run 24 p + p vertex distributions.'),
 ('efficiency','5.13',112,'Acceptance and reconstruction efficiency','Representative π⁰ efficiency: narrow and wide pseudorapidity intervals.'),
 ('energy-scale','5.16',120,'Energy scale becomes yield uncertainty','Representative π⁰ cross-section uncertainty from a 3% energy-scale variation.'),
 ('peak','6.1',123,'Peak position and width','Representative π⁰ mass and width as functions of pT.'),
 ('cross-section','6.5',129,'Cross sections compared with PHENIX','Representative π⁰ result in |η| < 0.35, with normalization fixing and uncertainty breakdown.'),
 ('ratio','6.9',135,'The η / π⁰ ratio','Representative |η| < 0.35 result versus pT and its relative uncertainties.'),
 ('rapidity','6.11',138,'The ratio across pseudorapidity','5.5 < pT < 6.5 GeV, Photon 4 GeV trigger; large uncertainties at the edges.'),
 ('ml','A.3',159,'η signal after machine learning','XGBoost result in p + p simulation, after iterative background rejection.'),
 ('conversion','C.1',165,'External photon conversions','Representative π⁰ study: at least one decay photon converts before EMCal.'),
 ('auau','F.8',183,'Position swapping in Au + Au','The single Appendix F example: 5.5 < pT < 6.0 GeV, Run 24 Au + Au.')
]
(ROOT/'assets/figures').mkdir(exist_ok=True)
out=[]
with pdfplumber.open(ROOT/'assets/thesis.pdf') as pdf:
 for key,number,page,title,caption in figures:
  p=pdf.pages[page-1]
  imgs=p.images
  bounds=[min(i['x0'] for i in imgs)-3,min(i['top'] for i in imgs)-3,max(i['x1'] for i in imgs)+3,max(i['bottom'] for i in imgs)+3]
  prefix=ROOT/'tmp'/f'page-{page}'
  subprocess.run(['pdftoppm','-f',str(page),'-l',str(page),'-singlefile','-scale-to','1800','-png',str(ROOT/'assets/thesis.pdf'),str(prefix)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
  image=Image.open(str(prefix)+'.png')
  sx,sy=image.width/p.width,image.height/p.height
  image.crop((round(bounds[0]*sx),round(bounds[1]*sy),round(bounds[2]*sx),round(bounds[3]*sy))).save(ROOT/f'assets/figures/{key}.webp',quality=94)
  out.append(dict(id=key,number=number,page=page,title=title,caption=caption,src=f'assets/figures/{key}.webp'))
(ROOT/'figures.js').write_text('window.THESIS_FIGURES = '+json.dumps(out,ensure_ascii=False,indent=2)+';\n')
print(f'Extracted {len(out)} representative figures.')
