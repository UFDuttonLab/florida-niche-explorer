import { Species } from '@/types/game';

export const species: Species[] = [
  {
    id: 'florida-panther',
    name: 'Florida Panther',
    scientificName: 'Puma concolor coryi',
    rarity: 'endangered',
    image: '/images/florida-panther.jpg',
    fundamentalNiche: ['forest', 'wetland', 'grassland'],
    preferredResources: ['dense_cover', 'large_territory', 'prey_animals'],
    competitionFactors: ['human_development', 'vehicle_traffic', 'territory_overlap'],
    threats: ['habitat_fragmentation', 'vehicle_strikes', 'genetic_isolation'],
    description: 'Large predatory cat requiring extensive undisturbed territory for hunting and breeding.',
    conservationStatus: 'Endangered - fewer than 200 individuals remain in the wild',
    realizedNicheImpact: 'Invasive species severely restrict panther habitat. Burmese pythons reduce prey availability by 85%, while wild boars compete for territory and destroy denning sites. Cattle egrets indicate habitat fragmentation that forces panthers into smaller, isolated territories.'
  },
  {
    id: 'snail-kite',
    name: 'Snail Kite',
    scientificName: 'Rostrhamus sociabilis',
    rarity: 'rare',
    image: '/images/snail-kite.jpg',
    fundamentalNiche: ['wetland'],
    preferredResources: ['freshwater', 'apple_snails', 'emergent_vegetation'],
    competitionFactors: ['water_level_changes', 'other_raptors', 'habitat_quality'],
    threats: ['drought', 'water_management', 'pollution'],
    description: 'Specialized raptor that feeds almost exclusively on apple snails in freshwater marshes.',
    conservationStatus: 'Species of Special Concern - highly dependent on wetland conditions',
    realizedNicheImpact: 'Water hyacinth blocks access to nesting sites and reduces fish populations by creating oxygen-poor conditions. Brazilian pepper trees eliminate native marsh plants that provide nesting materials. The kite\'s specialized bill becomes less effective as invasive plants alter wetland structure.'
  },
  {
    id: 'manatee',
    name: 'West Indian Manatee',
    scientificName: 'Trichechus manatus',
    rarity: 'rare',
    image: '/images/manatee.jpg',
    fundamentalNiche: ['wetland', 'coastal'],
    preferredResources: ['seagrass', 'warm_water', 'shallow_areas'],
    competitionFactors: ['boat_traffic', 'cold_stress', 'pollution'],
    threats: ['boat_strikes', 'habitat_loss', 'cold_weather'],
    description: 'Large aquatic mammal that grazes on seagrass and requires warm water refuges.',
    conservationStatus: 'Threatened - vulnerable to human activities and environmental changes',
    realizedNicheImpact: 'Water hyacinth forms dense mats that block access to seagrass beds, reducing food availability by 60%. Wild boars damage coastal vegetation and increase water turbidity. Boat strikes increase as manatees are forced into busier waterways due to habitat loss from invasive species.'
  },
  {
    id: 'gopher-tortoise',
    name: 'Gopher Tortoise',
    scientificName: 'Gopherus polyphemus',
    rarity: 'uncommon',
    image: '/images/gopher-tortoise.jpg',
    fundamentalNiche: ['grassland', 'forest'],
    preferredResources: ['sandy_soil', 'native_plants', 'open_canopy'],
    competitionFactors: ['fire_suppression', 'invasive_plants', 'development'],
    threats: ['habitat_loss', 'fragmentation', 'disease'],
    description: 'Keystone species that creates burrows used by many other animals in dry, sandy habitats.',
    conservationStatus: 'Threatened - depends on fire-maintained ecosystems',
    realizedNicheImpact: 'Wild boars destroy burrows and nesting sites through rooting behavior. Cattle egrets compete for similar ground-nesting areas. Brazilian pepper trees alter soil chemistry, making it harder to dig burrows. Gopher tortoises are forced into marginal habitats with higher predation risk.'
  },
  {
    id: 'green-anole',
    name: 'Green Anole',
    scientificName: 'Anolis carolinensis',
    rarity: 'common',
    image: '/images/green-anole.jpg',
    fundamentalNiche: ['forest', 'urban', 'grassland'],
    preferredResources: ['insects', 'vegetation', 'perch_sites'],
    competitionFactors: ['invasive_anoles', 'habitat_modification', 'pesticides'],
    threats: ['invasive_species', 'habitat_loss', 'climate_change'],
    description: 'Native lizard that changes color and is an important insect predator.',
    conservationStatus: 'Stable but declining - faces competition from invasive species',
    realizedNicheImpact: 'Brown anoles force green anoles to retreat to higher canopy levels, reducing territory size by 50%. Burmese pythons and wild boars destroy ground-level habitat. The realized niche shrinks from ground to treetop to mainly upper canopy, limiting reproductive success and food access.'
  },
  {
    id: 'roseate-spoonbill',
    name: 'Roseate Spoonbill',
    scientificName: 'Platalea ajaja',
    rarity: 'uncommon',
    image: '/images/roseate-spoonbill.jpg',
    fundamentalNiche: ['wetland', 'coastal', 'mangrove'],
    preferredResources: ['shallow_water', 'small_fish', 'crustaceans', 'nesting_trees'],
    competitionFactors: ['water_levels', 'human_disturbance', 'other_waders'],
    threats: ['habitat_alteration', 'disturbance', 'pollution'],
    description: 'Distinctive pink wading bird that feeds by sweeping its specialized bill through water.',
    conservationStatus: 'Species of Special Concern - sensitive to water level changes',
    realizedNicheImpact: 'Cattle egrets compete directly for roosting and nesting sites, often displacing spoonbills through aggressive behavior. Water hyacinth reduces fish and crustacean populations that spoonbills depend on. Brazilian pepper trees eliminate native vegetation that provides proper nesting substrates, forcing spoonbills into suboptimal locations.'
  }
];