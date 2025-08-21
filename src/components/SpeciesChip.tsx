import React from 'react';
import { Species } from '@/types/game';
import { cn } from '@/lib/utils';

interface SpeciesChipProps {
  species: Species;
  compact?: boolean;
}

const rarityStyles = {
  common: 'bg-species-common',
  uncommon: 'bg-species-uncommon',
  rare: 'bg-species-rare',
  endangered: 'bg-species-endangered'
};

export function SpeciesChip({ species, compact = false }: SpeciesChipProps) {
  return (
    <div className={cn(
      'flex items-center gap-2 p-2 bg-white/90 rounded-lg shadow-species',
      compact && 'p-1'
    )}>
      <img
        src={species.image}
        alt={species.name}
        className={cn(
          'rounded object-cover',
          compact ? 'w-6 h-6' : 'w-8 h-8'
        )}
      />
      <div className="flex-1 min-w-0">
        <p className={cn(
          'font-medium text-foreground truncate',
          compact ? 'text-xs' : 'text-sm'
        )}>
          {species.name}
        </p>
        <div className="flex items-center gap-1">
          <div 
            className={cn(
              'w-2 h-2 rounded-full',
              rarityStyles[species.rarity]
            )}
          />
          <span className="text-xs text-muted-foreground capitalize">
            {species.rarity}
          </span>
        </div>
      </div>
    </div>
  );
}