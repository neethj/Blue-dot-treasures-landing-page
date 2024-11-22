import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const foods = [
  {
    id: 'smoothie',
    name: 'Smoothie',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80'
  },
  {
    id: 'salad',
    name: 'Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  },
  {
    id: 'soup',
    name: 'Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80'
  },
  {
    id: 'tea',
    name: 'Tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80'
  }
];

const benefits = {
  smoothie: 'Boosts nutritional content with 90+ nutrients',
  salad: 'Adds protein and essential minerals',
  soup: 'Enhances immune-boosting properties',
  tea: 'Natural antioxidant boost'
};

export default function DragDropSection() {
  const [enhancedFoods, setEnhancedFoods] = useState<string[]>([]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const foodId = result.destination.droppableId;
    if (!enhancedFoods.includes(foodId)) {
      setEnhancedFoods([...enhancedFoods, foodId]);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Enhance Your Favorite Foods with Moringa
        </h2>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* First Row */}
            <Droppable droppableId={foods[0].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={foods[0].image}
                    alt={foods[0].name}
                    className="w-full h-full object-cover"
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId={foods[1].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={foods[1].image}
                    alt={foods[1].name}
                    className="w-full h-full object-cover"
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Middle Row with Moringa */}
            <Droppable droppableId="moringa-source">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Draggable draggableId="moringa" index={0}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="aspect-square bg-white rounded-xl shadow-lg p-4 cursor-move relative group"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80"
                          alt="Moringa"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-blue-500/80 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-center font-semibold px-4">
                            Drag to enhance your food!
                          </p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Last Row */}
            <Droppable droppableId={foods[2].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={foods[2].image}
                    alt={foods[2].name}
                    className="w-full h-full object-cover"
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId={foods[3].id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={foods[3].image}
                    alt={foods[3].name}
                    className="w-full h-full object-cover"
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Enhanced Foods Results */}
          {enhancedFoods.length > 0 && (
            <div className="mt-12 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Enhanced Foods</h3>
              <div className="space-y-4">
                {enhancedFoods.map((foodId) => (
                  <div
                    key={foodId}
                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg"
                  >
                    <img
                      src={foods.find(f => f.id === foodId)?.image}
                      alt={foods.find(f => f.id === foodId)?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">
                        {foods.find(f => f.id === foodId)?.name}
                      </h4>
                      <p className="text-gray-600">{benefits[foodId as keyof typeof benefits]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DragDropContext>
      </div>
    </section>
  );
}