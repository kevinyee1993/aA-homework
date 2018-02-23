require 'LRU_Cache'
require 'rspec'

RSpec.describe LRUCache do

  subject(:a){ LRUCache.new(4) }

  describe "#initialize" do
    it "creates an empty array" do
      expect(a.cache).to eq([])
    end

    it "sets a max cache size" do
      expect(a.max).to eq(4)
    end
  end

  describe "count" do
    it "returns numbers of elements currently in cache" do
      expect(a.count).to eq(0)
    end
  end

  describe "#add" do
    it "adds an element to cache" do
      a.add(3)
      expect(a.cache).to eq([3])
    end

    it "adds multiple unique elements to cache" do
      a.add(3)
      a.add(4)
      expect(a.cache).to eq([3,4])
    end

    it "moves existing element to the front instead of adding it new" do
      a.add(3)
      a.add(4)
      a.add(3)
      expect(a.cache).to eq([4,3])
    end

    it "removes least used element from cache if max exceeded" do
      a.add(3)
      a.add(4)
      a.add(5)
      a.add(6)
      a.add(7)
      expect(a.cache).to eq([4,5,6,7])
    end
  end



end
