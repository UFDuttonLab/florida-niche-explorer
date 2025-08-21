import React from 'react';
import { GameState } from '@/types/game';
import { TrendingUp, Users, AlertTriangle } from 'lucide-react';

interface GameStatsProps {
  gameState: GameState;
  placedSpeciesCount: number;
  totalSpecies: number;
}

export function GameStats({ gameState, placedSpeciesCount, totalSpecies }: GameStatsProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-semibold text-card-foreground mb-4">Game Statistics</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-game-success" />
          <div>
            <p className="text-sm font-medium text-card-foreground">Score</p>
            <p className="text-lg font-bold text-game-success">{gameState.score}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-card-foreground">Species Placed</p>
            <p className="text-lg font-bold text-primary">{placedSpeciesCount}/{totalSpecies}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-game-warning" />
          <div>
            <p className="text-sm font-medium text-card-foreground">Conflicts</p>
            <p className="text-lg font-bold text-game-conflict">{gameState.conflicts.length}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Biodiversity Index</span>
          <span className="font-medium text-card-foreground">{gameState.biodiversityIndex.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-game-success to-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${gameState.biodiversityIndex}%` }}
          />
        </div>
      </div>
    </div>
  );
}