import React, { useState } from 'react';
import { Species, Habitat } from '@/types/game';
import { GameBoard } from '@/components/GameBoard';
import { SpeciesPanel } from '@/components/SpeciesPanel';
import { InvasiveSpeciesPanel } from '@/components/InvasiveSpeciesPanel';
import { GameStats } from '@/components/GameStats';
import { SpeciesInfoModal } from '@/components/SpeciesInfoModal';
import { useGameLogic } from '@/hooks/useGameLogic';
import { useToast } from '@/hooks/use-toast';
import floridaEcosystems from '@/assets/florida-ecosystems.jpg';

const Index = () => {
  const { habitats, species, invasives, gameState, placeSpecies, introduceInvasiveSpecies } = useGameLogic();
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [infoSpecies, setInfoSpecies] = useState<Species | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const { toast } = useToast();

  const handleSpeciesSelect = (species: Species) => {
    setSelectedSpecies(species);
  };

  const handleSpeciesInfo = (species: Species) => {
    setInfoSpecies(species);
    setShowInfo(true);
  };

  const handleSpeciesPlace = (speciesId: string, habitatId: string) => {
    const species = selectedSpecies;
    const habitat = habitats.find(h => h.id === habitatId);
    
    if (!species || !habitat) return;

    // Check if species can live in this habitat
    if (!species.fundamentalNiche.includes(habitat.type)) {
      toast({
        title: "Incompatible Habitat",
        description: `${species.name} cannot survive in ${habitat.name}. Check their fundamental niche requirements.`,
        variant: "destructive"
      });
      return;
    }

    // Check if habitat is at capacity
    if (habitat.currentOccupants.length >= habitat.capacity) {
      const warningType = species.isInvasive ? "Invasion Warning" : "Habitat Full";
      const warningMessage = species.isInvasive 
        ? `${species.name} will likely displace native species in ${habitat.name}!`
        : `${habitat.name} is at maximum capacity. This will create competition!`;
      
      toast({
        title: warningType,
        description: warningMessage,
        variant: "destructive"
      });
    }

    placeSpecies(speciesId, habitatId);
    setSelectedSpecies(null);
    
    const placementType = species.isInvasive ? "Invasive Species Introduced" : "Species Placed";
    toast({
      title: placementType,
      description: `${species.name} has been placed in ${habitat.name}`,
      variant: species.isInvasive ? "destructive" : "default"
    });
  };

  const handleIntroduceInvasive = (invasiveId: string) => {
    introduceInvasiveSpecies(invasiveId);
    toast({
      title: "Invasive Species Introduced",
      description: "A new invasive species is now available to place. Handle with caution!",
      variant: "destructive"
    });
  };

  const handleHabitatClick = (habitat: Habitat) => {
    if (habitat.currentOccupants.length > 0) {
      // Show habitat details or conflicts
      const conflicts = gameState.conflicts.filter(c => c.habitat === habitat.id);
      if (conflicts.length > 0) {
        toast({
          title: "Habitat Conflicts",
          description: conflicts[0].description,
          variant: "destructive"
        });
      }
    }
  };

  const placedSpeciesCount = [...species, ...invasives].filter(s => s.placedInHabitat).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-ocean text-white shadow-lg">
        <div 
          className="relative h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${floridaEcosystems})` }}
        >
          <div className="absolute inset-0 bg-ocean-deep/70" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Niche Navigator: Florida Edition</h1>
              <p className="text-ocean-light">
                Explore the difference between fundamental and realized niches of Florida's native species
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Game Stats Bar */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto">
          <GameStats 
            gameState={gameState}
            placedSpeciesCount={placedSpeciesCount}
            totalSpecies={species.length + invasives.length}
          />
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex h-[calc(100vh-200px)]">
        <SpeciesPanel
          species={species}
          selectedSpecies={selectedSpecies?.isInvasive ? null : selectedSpecies}
          onSpeciesSelect={handleSpeciesSelect}
          onSpeciesInfo={handleSpeciesInfo}
        />
        
        <GameBoard
          habitats={habitats}
          onHabitatClick={handleHabitatClick}
          selectedSpecies={selectedSpecies}
          onSpeciesPlace={handleSpeciesPlace}
        />

        <InvasiveSpeciesPanel
          invasives={invasives}
          selectedSpecies={selectedSpecies?.isInvasive ? selectedSpecies : null}
          onSpeciesSelect={handleSpeciesSelect}
          onSpeciesInfo={handleSpeciesInfo}
          onIntroduceInvasive={handleIntroduceInvasive}
        />
      </div>

      {/* Species Info Modal */}
      <SpeciesInfoModal
        species={infoSpecies}
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
      />
    </div>
  );
};

export default Index;
