class Map

  def initialize
    @map = []
  end

  def assign(key, value)
    @map << [key, value] if key_new?(key)
  end

  def key_new?(key)
    counter = 0
    @map.each do |pair|
      counter += 1 if pair[0] == key
    end

    counter >= 1 ? false : true
  end

  def lookup(key)

  end

  def remove(key)

  end

  def show
    @map
  end

end
