import type { Guide } from './pages';

// Topic-specific content for existing routes. Product values stay in products.ts;
// project requirements below are review criteria, not promised specifications.
export const solutionContent: Record<string, Partial<Guide>> = {
  'dry-type-transformer-temperature-monitoring': {
    description: 'Plan fiber optic temperature monitoring for dry-type transformer windings: measurement points, probe installation, sensor selection and monitor integration.',
    intro: 'Dry-type transformer temperature monitoring uses selected winding measurements to track local thermal conditions. For cast-resin and air-cooled designs, fluorescent fiber optic probes offer an electrically passive measurement point connected to an external monitor. Probe locations and installation must be agreed with the transformer manufacturer before assembly.',
    sections: [
      { heading: 'Where optical winding monitoring fits', body: 'Use this approach when the engineering task calls for direct measurements at winding locations where conductive sensor wiring complicates insulation or electromagnetic compatibility. Define whether the project concerns a new transformer, factory thermal evaluation or an accessible point on an existing asset. A winding temperature, an enclosure temperature and an ambient temperature answer different questions.' },
      { heading: 'Plan measurement points from the thermal design', body: 'Start with the winding regions identified as thermally critical by the transformer designer. Record the phase, winding, physical position and purpose of each probe. Measurements at corresponding positions can support phase comparisons, but a point sensor cannot prove that an uninstrumented location is cooler. Ambient or cooling-air measurements provide context and should be labeled separately from winding measurements.' },
      { heading: 'Installation in cast-resin and air-cooled windings', body: 'For embedded points, agree the probe drawing, fixation and optical exit route before winding manufacture or casting. The manufacturer must review compatibility with the insulation materials and manufacturing process. At accessible points, use an approved mounting method that maintains thermal contact and protects the fiber. Do not drill cured insulation or force a probe into an existing winding without an approved engineering procedure.' },
      { heading: 'Protect the optical route and identify each channel', body: 'Keep the route clear of sharp edges, crushing and service activities that could pull the fiber. Obtain the minimum bend radius and connector handling instructions for the selected probe; these are not universal values. Label the probe and monitor channel against the measurement-point schedule, and retain installation drawings for commissioning and maintenance.' },
      { heading: 'Compare optical probes, RTDs and infrared inspection', body: 'RTDs measure temperature through electrical resistance and may suit approved accessible locations. Fluorescent optical probes use light at the sensing point, avoiding a conductive measurement signal there. Infrared inspection requires a visible surface and does not directly measure an inaccessible internal winding point. Select the method from the location, insulation constraints and access requirements; an optical probe does not remove the need for insulation coordination.' },
      { heading: 'Select the probe and monitor as a compatible system', body: 'Confirm the operating temperature envelope, required accuracy and installed response, probe dimensions, fiber length and materials against the chosen model. The monitor must support the required optical probes and channel count. Existing product pages describe available families; their listed values must not be assumed to apply to every dry-type transformer installation.' },
      { heading: 'Commission readings, diagnostics and control outputs', body: 'Verify channel-to-point mapping and plausible readings under an approved commissioning procedure. Confirm how a broken or disconnected probe is reported, and distinguish that state from an overtemperature alarm. If fan control, alarm relays or a trip interface are required, confirm the selected monitor supports them and agree the control logic with the transformer engineer. Setpoints must come from the transformer design and protection requirements.' }
    ],
    table: { heading: 'Dry-type transformer specification checklist', columns: ['Design item', 'Information to confirm'], rows: [
      ['Measurement layout', 'Phase and winding identifiers, approved locations, purpose of each point and required channel count.'],
      ['Probe assembly', 'Drawing, sensing-tip geometry, material compatibility, fixation and manufacturing-stage installation.'],
      ['Optical routing', 'Required length, connector type, bend limit, mechanical protection and accessible exit route.'],
      ['Measurement performance', 'Model-specific range, accuracy, calibration evidence and response under the intended mounting conditions.'],
      ['Monitor and controls', 'Compatible probes, supply, enclosure, channel diagnostics and required outputs.'],
      ['Plant integration', 'Confirmed interface and register map, alarm ownership and loss-of-probe behavior.']
    ] },
    faqs: [
      { q: 'How many probes does a dry-type transformer need?', a: 'The transformer thermal design and monitoring purpose determine the number. Prepare a point schedule by phase and winding; there is no universal probe count for every transformer.' },
      { q: 'Can optical probes be added to an existing cast-resin winding?', a: 'An embedded installation generally needs manufacturing-stage planning. Accessible-point options depend on the construction and an approved installation method; do not assume an internal retrofit is possible.' },
      { q: 'Does the optical monitor replace the existing fan or protection controller?', a: 'Only if its documented outputs and the approved control design support that role. Temperature acquisition alone does not establish fan-control or trip capability.' }
    ],
    productSlugs: ['fluorescent-fiber-optic-temperature-probe', 'multi-channel-fiber-optic-temperature-monitor', 'transformer-fiber-optic-temperature-sensor'],
    relatedLinks: [
      { label: 'Transformer fiber optic monitoring architecture', href: '/solutions/transformer-fiber-optic-temperature-monitoring/' },
      { label: 'Probe installation planning', href: '/resources/transformer-fiber-optic-probe-installation/' },
      { label: 'Sensor selection guide', href: '/resources/fiber-optic-temperature-sensor-selection-guide/' }
    ]
  },
  'transformer-fiber-optic-temperature-monitoring': {
    description: 'Design a transformer fiber optic temperature monitoring system with winding probes, optical routing, channel mapping and confirmed control-system interfaces.',
    intro: 'A transformer fiber optic temperature monitoring system connects fluorescent probes at selected winding points to an external instrument. It reports local temperatures directly, complementing bulk measurements and thermal models. The measurement-point plan, probe construction and monitor interface must match the transformer design.',
    sections: [
      { heading: 'Direct winding measurements and thermal models', body: 'A probe reports the temperature at its installed location. That reading can be compared with a thermal model or other measurements, but it does not identify every hot spot throughout the winding. Choose representative locations from the thermal design and document which winding region each channel represents.' },
      { heading: 'Oil-immersed and dry-type installation requirements', body: 'Oil-immersed installations require a reviewed probe assembly, material compatibility and a suitable fiber exit and sealing arrangement. Dry-type installations require compatibility with winding insulation, casting or assembly processes and the cooling layout. Embedded probes should be planned before manufacture; accessible points on existing equipment need a separate installation review.' },
      { heading: 'Build the probe-to-monitor measurement chain', body: 'The external instrument excites each fluorescent sensing tip through its optical fiber and calculates temperature from the returned fluorescence lifetime. Specify compatible probe and instrument families, the number of points, optical lengths and channel labels. Locate instrumentation where it can be serviced and where its documented operating conditions can be maintained.' },
      { heading: 'Integrate temperature, alarm and channel status', body: 'Confirm the selected monitor interface before controls design. RS485 and Modbus RTU are listed for referenced system configurations, but availability and register definitions must be confirmed for the chosen model. Map temperature values and probe-fault states separately. Define alarm handling, logging and any protection interface in the transformer control scheme.' },
      { heading: 'Review the configuration before purchase', body: 'Provide the transformer construction, thermal point schedule, installation stage, temperature envelope, required measurement performance and plant interface. Request the matching probe drawings, monitor datasheet and communications documentation. Confirm factory checks and commissioning responsibilities before the installation is released.' }
    ],
    productSlugs: ['transformer-fiber-optic-temperature-sensor', 'fluorescent-fiber-optic-temperature-probe', 'fiber-optic-temperature-measurement-system'],
    relatedLinks: [
      { label: 'Dry-type transformer point layout and installation', href: '/solutions/dry-type-transformer-temperature-monitoring/' },
      { label: 'Oil-immersed transformer installation planning', href: '/solutions/oil-immersed-transformer-temperature-monitoring/' },
      { label: 'Winding hot spot monitoring', href: '/solutions/transformer-winding-hotspot-monitoring/' },
      { label: 'Monitoring system selection guide', href: '/resources/fiber-optic-temperature-monitoring-system-selection-guide/' }
    ]
  }
};

export const resourceContent: Record<string, Partial<Guide>> = {
  'what-is-a-fiber-optic-temperature-sensor': {
    description: 'Understand what a fiber optic temperature sensor measures, the parts of a fluorescent point-sensing system, suitable applications and selection limits.',
    intro: 'A fiber optic temperature sensor uses an optical sensing element and fiber connection to obtain a temperature reading. INNO uses fluorescent point probes: each tip measures its own local temperature, while a compatible external instrument processes the returned light. The term also covers other optical methods, so specify the sensing principle when comparing products.',
    sections: [
      { heading: 'What the sensor measures', body: 'A fluorescent point probe measures temperature at its sensing tip. Thermal contact and placement determine which component or region the reading represents. A sensor on an accessible surface does not automatically report the temperature of an internal winding hot spot.' },
      { heading: 'The probe, optical fiber and instrument', body: 'The probe contains the temperature-sensitive fluorescent element. The fiber carries excitation and return light. The monitor supplies the optical excitation, processes the response and produces temperature values. The sensing point is electrically passive; the monitor still requires power, and its outputs depend on the selected configuration.' },
      { heading: 'Where fluorescent point sensors are useful', body: 'Typical applications in this product portfolio include transformer windings, reactor windings and switchgear contact points. The optical measurement path is useful where a conductive sensor loop would complicate electrical isolation or electromagnetic compatibility. Probe construction and mounting still require review for the actual equipment.' },
      { heading: 'Point sensing, FBG and distributed sensing', body: 'Fluorescent point sensing evaluates a discrete tip using fluorescence lifetime. Fiber Bragg grating sensing evaluates changes in reflected wavelength. Distributed temperature sensing produces a temperature profile along a sensing fiber. These architectures answer different measurement questions; a fluorescent point probe does not provide continuous coverage along its cable.' },
      { heading: 'What to specify before selecting a sensor', body: 'Define the measurement location, temperature envelope, required accuracy and response, allowable geometry, fiber route and monitor channel count. Request the matching probe drawing and system datasheet. Resolution describes the reported increment; it is not the same as accuracy, and neither guarantees the installed point represents the hottest location.' }
    ],
    table: { heading: 'Which part do you need?', columns: ['Part', 'Role in the measurement chain'], rows: [
      ['Fluorescent probe', 'Measures temperature at a specified contact point.'],
      ['Optical fiber and connectors', 'Carry light between that point and a compatible instrument.'],
      ['Monitor or OEM module', 'Processes the optical response into temperature readings.'],
      ['Configured control interface', 'Makes readings and status available to the host control system when supported.']
    ] },
    faqs: [
      { q: 'Is every fiber optic temperature sensor a fluorescent sensor?', a: 'No. Fiber optic temperature sensing includes several measurement principles. This site focuses on fluorescence-lifetime point sensing.' },
      { q: 'Does one probe measure temperature along the whole fiber?', a: 'No. A fluorescent point probe measures at its sensing tip. Distributed temperature sensing uses a different architecture for a temperature profile along a fiber.' },
      { q: 'Can a probe operate without a compatible monitor?', a: 'The point probe is passive, but it requires a compatible instrument or module to supply excitation and calculate the temperature.' }
    ],
    relatedLinks: [
      { label: 'Fluorescent fiber optic temperature sensor', href: '/products/fiber-optic-temperature-sensor/' },
      { label: 'Transformer monitoring solution', href: '/solutions/transformer-fiber-optic-temperature-monitoring/' },
      { label: 'How fluorescent sensors work', href: '/resources/how-fiber-optic-temperature-sensors-work/' },
      { label: 'Sensor selection guide', href: '/resources/fiber-optic-temperature-sensor-selection-guide/' }
    ]
  },
  'how-fiber-optic-temperature-sensors-work': {
    title: 'How Do Fiber Optic Temperature Sensors Work?',
    description: 'Follow fluorescence-lifetime temperature sensing from excitation light to decay measurement and calibration, with practical limits for optical signal quality.',
    intro: 'A fluorescent fiber optic temperature sensor works by sending excitation light to a sensing tip and measuring how the returned fluorescence decays over time. A compatible instrument uses a calibration relationship to convert decay lifetime into temperature. This article explains that point-sensing process; other optical sensor types use different measurement principles.',
    sections: [
      { heading: '1. Excitation light reaches the sensing tip', body: 'The monitor launches light through the optical fiber to the fluorescent material in the probe. The temperature-sensitive element is at the measurement point, while the powered excitation and processing electronics remain in the instrument.' },
      { heading: '2. Fluorescence returns through the optical path', body: 'After excitation, the material emits light whose intensity decreases with time. The instrument receives that return signal and evaluates its decay behavior. Temperature changes the fluorescence lifetime used by the selected sensing material.' },
      { heading: '3. Lifetime is converted through calibration', body: 'The instrument applies the calibration relationship for the compatible probe to calculate a temperature value from the measured decay lifetime. The relationship and processing are specific to the sensing system; a universal lifetime-to-temperature equation should not be assumed for every probe.' },
      { heading: '4. Readings are assigned to monitored points', body: 'A multi-channel monitor associates each result with a labeled probe channel. Local display, alarms and plant communications depend on the instrument configuration. Temperature information and channel diagnostic status should remain distinguishable so a lost signal is not interpreted as a valid cool reading.' },
      { heading: 'Why lifetime measurement still needs a sound optical route', body: 'The temperature variable is decay time rather than absolute brightness, reducing dependence on light level. This does not make the system immune to damaged fibers, poor connectors or inadequate return signal. Follow the selected model instructions for handling, bend protection and diagnostics.' },
      { heading: 'What the optical principle does not determine', body: 'The installed response also depends on probe construction and thermal contact. Accuracy depends on the selected probe-and-instrument configuration and calibration. The optical method provides a local point measurement, so placement remains essential even when the instrument is working correctly.' }
    ],
    table: { heading: 'Signal path and engineering checks', columns: ['Stage', 'What to check'], rows: [
      ['Excitation and optical connection', 'Compatible probe and monitor; intact, correctly handled connectors.'],
      ['Returned fluorescence', 'Optical continuity and model-specific channel diagnostics.'],
      ['Temperature calculation', 'Calibration and accuracy documentation for the chosen configuration.'],
      ['Installed measurement', 'Correct point mapping, thermal contact and required response.']
    ] },
    faqs: [
      { q: 'Does the monitor calculate temperature from light intensity alone?', a: 'In the fluorescence-lifetime method described here, it evaluates decay time and uses calibration to calculate temperature. Enough return signal is still required for a valid measurement.' },
      { q: 'Why can a correctly working sensor miss a winding hot spot?', a: 'A point probe only measures its installed location. It cannot determine the temperature at a different, uninstrumented winding region.' },
      { q: 'Is the optical sensing point powered?', a: 'No powered electronics are needed at the fluorescent sensing tip. The external monitor supplies excitation and performs the signal processing.' }
    ],
    relatedLinks: [
      { label: 'Fiber optic temperature sensor overview', href: '/resources/what-is-a-fiber-optic-temperature-sensor/' },
      { label: 'Fluorescence lifetime measurement guide', href: '/resources/fluorescence-lifetime-temperature-measurement/' },
      { label: 'Fiber optic measurement system', href: '/products/fiber-optic-temperature-measurement-system/' },
      { label: 'Dry-type transformer application', href: '/solutions/dry-type-transformer-temperature-monitoring/' }
    ]
  }
};
