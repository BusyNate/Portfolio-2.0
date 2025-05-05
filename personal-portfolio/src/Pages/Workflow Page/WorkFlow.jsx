import React from 'react';
import Navigation from '../../Components/Navigation';
import PlanningCard from '../../Components/Process Card';
import { ProcessCard, ProductCard, PerformanceCard } from '../../Components/Process Card';
import GradientRule from '../../Components/GradientRule';
import './WorkFlow.css';

export default function WorkFlow() {
  return (
    <div className="workflow-container">
      <Navigation />

      <div className="workflow-content">
        
        <div className="workflow-header">
          <h1 className="workflow-title"> My Tried & Tested WorkFlow</h1>
          <div className="workflow-description-container">
            <GradientRule />
            <p className="workflow-description">
              To every master architect, developer and designer, an established methodolody is employed to achieve the deepest level of flow-state as to yield maximal results. Here lies a High-Level overview of my strategic workflow I haved used to implement & complete projects.
            </p>
            <GradientRule />
          </div>
        </div>
        <div className="workflow-cards-container">
          <PlanningCard />
          <ProcessCard />
          <ProductCard />
          <PerformanceCard />
        </div>
      </div>
    </div>
  );
}
